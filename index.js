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

const server = new GraphQLServer({ 
  typeDefs: __dirname + "/graphql/schema.graphql", 
  resolvers,
  context: async ({ req }) => {
    console.log("Req => " + req);
    if (sess && sess.hasOwnProperty('token')) {  
      const token = sess['token'];
  
      try {
        const currentSession = await jwt.verify(token, SECRET);

        console.log("Session => " + currentSession);
        if (!currentSession.user) throw new AuthenticationError('you must be logged in');

        return sess;
      } catch(err) {
        return null;
      }
    }
    return new Error('you must be logged in');
  }
});

const app = server.express;
const router = express.Router()
app.use('/', router)

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

// Refer to https://stackoverflow.com/a/48476897
app.post('/secure', function(req, res) {
    const body = req.body;
    const token = jwt.sign({ user: { id: body.id, password: body.pwd } }, SECRET);

    console.log(token);
    res.json({ token: token });

    sess = req.session;
    sess.token = token;
    sess.user = { id: body.id };
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
