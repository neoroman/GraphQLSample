import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import express from "express";
import session from "express-session";
import ms from "ms";
import * as jwt from "jsonwebtoken";
const fs = require("fs");

const config = require(__dirname + '/config/config.json');
const PORT = config.PORT;
const SECRET = config.SECRET;
// const privateKey = fs.readFileSync(config.keyFile);
// const certificate = fs.readFileSync(config.certFile);
var sess = null;

const options = {
  port: PORT,
  endpoint: "/api",
  playground: "/play",
  cors: {
    credentials: true,
    origin: ["http://localhost:5000"] // your frontend url.
  },
  // https: {
  //   cert: certificate,
  //   key: privateKey
  // },
};

// middleware of check jwt
function checkJwt(req, res, next) {
  if (req.headers) {
    const token = req.headers.token;
    try {
      const currentSession =  jwt.verify(token, SECRET);
      console.log("Session => " + JSON.stringify(currentSession));
      
      if (!currentSession.user) {
        throw new AuthenticationError('you must be logged in 1');
      }
      req.user = currentSession.user;
    } catch(err) {
      throw new Error(`you must be logged in (${err})`);
    }
  } else {
    throw new Error(`you must be logged in (${err})`);
  }
  next(); 
}

const server = new GraphQLServer({ 
  typeDefs: __dirname + "/graphql/schema.graphql", 
  resolvers,
  context:  (req) => {
    console.log("Req => " + req.request);
    console.log("Req User => " + req.request.user);
    return {user: req.request.user};
  }
});

// session middleware
server.use(session({
  name: "GraphQLSampleAPI",
  secret: SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: ms('1d'),
  },
}));


const app = server.express;
const router = express.Router()
app.use(express.json()) // for parsing application/json
app.use('/', router)

// jwt credential 
app.use(options.endpoint, checkJwt);
app.use(options.endpoint, (err, req, res, next) => {
    if (err) return res.status(401).send(err.message);
    next();
  }
)
// Refer to https://stackoverflow.com/a/48476897
app.post('/secure', function(req, res) {
    const body = req.body;
    const token = jwt.sign({ user: { id: body.id, password: body.pwd } }, SECRET);

    console.log(token);
    res.json({ token: token });

    // sess = req.session;
    // sess.token = token;
    // sess.user = { id: body.id };
});
// Refer to https://stackoverflow.com/a/48476897
app.post('/secure/check', function(req, res) {
    const token = req.headers.token;
    const x = jwt.verify(token, SECRET);

    console.log("Session of /secure/check => " + JSON.stringify(sess));

    if (x.hasOwnProperty("user") && x.user.hasOwnProperty("id") && x.user.id.length > 0) {
      res.json({ auth: true });
    } else {
      res.json({ auth: false });
    }
});

server.start(options, () => console.log("Graphql Server Running on localhost:%s", PORT));
