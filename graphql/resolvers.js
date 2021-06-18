import * as jwt from "jsonwebtoken";

const config = require(__dirname + '/../config/config.json');
const SECRET = config.SECRET;
const models = require('../models');

const AdminDepartment = models.adminDepartment
const AdminGroup = models.adminGroup
const AdminGroupAuth = models.adminGroupAuth
const AdminGroupMenuMap = models.adminGroupMenuMap
const AdminMenu = models.adminMenu
const AdminRole = models.adminRole
const AdminUser = models.adminUser
const AnnualVacation = models.annualVacation
const Board = models.board
const CategoryTimeCost = models.categoryTimeCost
const Code = models.code
const CodeGroup = models.codeGroup
const CommonVacation = models.commonVacation
const Expenditure = models.expenditure
const ExtraWork = models.extraWork
const Holiday = models.holiday
const InternalTrip = models.internalTrip
const MapDeptGroup = models.mapDeptGroup
const Meal = models.meal
const Project = models.project
const ProjectReq = models.projectReq
const ProjectTimeCost = models.projectTimeCost
const ProjectTimeCostMap = models.projectTimeCostMap
const ProjectUserMap = models.projectUserMap
const Tasks = models.tasks
const TaskMap = models.taskMap
const Timetable = models.timetable
const Training = models.training
const Vacation = models.vacation

const localUserId = "neoroman";
let date = new Date();
const Op = require("sequelize").Op;

const data = {};

const resolvers = {
    Query: {
        isLogin: async (parent, args, context, info) => {
            try {
                // const deToken = await jwt.verify(context.token, SECRET);
                // console.log("Decoded Token => " + deToken);        
        
                return typeof context.user !== 'undefined';
            } catch(err) {
                return false;
            }
        },
        getAdminDepartment: async (parent, args, context, info) => {
            try {
                const items = await AdminDepartment.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getAdminGroup: async (parent, args, context, info) => {
            try {
                const items = await AdminGroup.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getAdminGroupAuth: async (parent, args, context, info) => {
            try {
                const items = await AdminGroupAuth.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getAdminGroupMenuMap: async (parent, args, context, info) => { try { const items = await AdminGroupMenuMap.findAll(); return items; } catch(err) {console.log(err);} },
        getAdminMenu: async (parent, args, context, info) => { try { const items = await AdminMenu.findAll(); return items; } catch(err) {console.log(err);} },
        getAdminRole: async (parent, args, context, info) => { try { const items = await AdminRole.findAll(); return items; } catch(err) {console.log(err);} },
        getUserInfo: async (parent, args, context, info) => {
            try { 
                let userId = { id: args.id }
                const items = await AdminUser.findAll({ where: userId });
                return items; 
            } 
            catch(err) {console.log(err);} 
        },
        getAnnualVacation: async (parent, args, context, info) => {
            try {
                const items = await AnnualVacation.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getBoard: async (parent, args, context, info) => {
            try {
                const items = await Board.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getCategoryTimeCost: async (parent, args, context, info) => { try { const items = await CategoryTimeCost.findAll(); return items; } catch(err) {console.log(err);} },
        getCodeGroup: async (parent, args, context, info) => {
            try {
                const items = await CodeGroup.findAll({
                    where: { 
                        codeGroupValue: {
                            [Op.startsWith]: args.groupId
                        }
                    },
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);}
        },
        getCommonVacation: async (parent, args, context, info) => {
            try {
                const items = await CommonVacation.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getCongratulationCondolence: async (parent, args, context, info) => {
            try {
                const items = await congratulationCondolence.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getExpenditure: async (parent, args, context, info) => {
            try {
                const items = await Expenditure.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getExtraWork: async (parent, args, context, info) => {
            try {
                const items = await ExtraWork.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getHoliday: async (parent, args, context, info) => {
            try {
                const items = await Holiday.findAll({
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getInternalTrip: async (parent, args, context, info) => {
             try {
                var month = args.date
                if (!args.date) {
                    month = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2); 
                }
                const items = await InternalTrip.findAll({
                    where: { 
                        userId: args.id, 
                        businessDate: {
                            [Op.startsWith]: month
                        }
                    },
                    limit: args.limit,
                    offset: args.offset
                });
                return items; 
            } 
            catch(err) {console.log(err);} 
        },
        getMapDeptGroup: async (parent, args, context, info) => { try { const items = await MapDeptGroup.findAll(); return items; } catch(err) {console.log(err);} },
        getMeal: async (parent, args, context, info) => { try { const items = await Meal.findAll(); return items; } catch(err) {console.log(err);} },
        getProject: async (parent, args, context, info) => { 
            try {
                const items = await Project.findAll({
                    where: { 
                        projectId: args.id
                    },
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);} 
        },
        getProjectReq: async (parent, args, context, info) => { try { const items = await ProjectReq.findAll(); return items; } catch(err) {console.log(err);} },
        getProjectTimeCost: async (parent, args, context, info) => { try { const items = await ProjectTimeCost.findAll(); return items; } catch(err) {console.log(err);} },
        getProjectTimeCostMap: async (parent, args, context, info) => { try { const items = await ProjectTimeCostMap.findAll(); return items; } catch(err) {console.log(err);} },
        getProjectUserMap: async (parent, args, context, info) => {
            try {
                const items = await ProjectUserMap.findAll({ 
                    where: { 
                        userId: args.userId,
                        status: 'C002001'
                    },
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);}
        },
        getTasks: async (parent, args, context, info) => {
            try {
                const items = await Tasks.findAll({ 
                    where: { 
                        taskId: args.id
                    },
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);}
        },
        getUserTask: async (parent, args, context, info) => {
            try {
                const items = await TaskMap.findAll({ 
                    where: { 
                        userId: args.userId
                    },
                    limit: args.limit,
                    offset: args.offset
                });
                return items;
            }
            catch(err) {console.log(err);}
        },
        getTimetable: async (parent, args, context, info) => { 
            try {
                var month = args.date
                if (!args.date) {
                    month = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2); 
                }
                const items = await Timetable.findAll({ 
                    where: { 
                        userId: args.id, 
                        workDay: {
                            [Op.startsWith]: month
                        }
                    },
                    limit: args.limit,
                    offset: args.offset
                });
                return items; 
            }
            catch(err) {console.log(err);} 
        },
        getTraining: async (parent, args, context, info) => { try { const items = await Training.findAll(); return items; } catch(err) {console.log(err);} },
        getVacation: async (parent, args, context, info) => { 
            try {
                var month = args.date
                if (!args.date) {
                    month = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2); 
                }
                const items = await Vacation.findAll({ 
                    where: { 
                        userId: args.id, 
                        fromDate: {
                            [Op.startsWith]: month
                        }
                    },
                    limit: args.limit,
                    offset: args.offset
                }); 
                return items; 
            }
            catch(err) {console.log(err);} 
        }
    },
    AdminDepartment: {
        parentDepartment: async (parent) => {
            return await AdminDepartment.findOne({ where: { deptCode: parent.parentDeptCode } })
        }
    },
    CodeGroup: {
        codeGroup: async (group) => {
            return await Code.findAll({ where: {
                codeGroupValue: { [Op.startsWith]: group.codeGroupValue } 
            } });
        }
    },
    Project: {
        department: async (project) => {
            return await AdminDepartment.findOne({ where: { deptCode: project.deptCode } });
        },
        taskList: async (project) => {
            var tasks;
            if (localUserId) {
                tasks = await TaskMap.findAll({ 
                    where: { 
                        projectId: project.projectId,
                        userId: localUserId
                    },
                    attributes: ['taskId'],
                    raw: true
                });
            } else {
                tasks = await TaskMap.findAll({ 
                    where: { 
                        projectId: project.projectId
                    },
                    attributes: ['taskId'],
                    raw: true
                });
            }
            const taskIDs = tasks.map( tasks => tasks.taskId );
            return await Tasks.findAll({
                where: {
                    taskId: {
                        [Op.in]: taskIDs
                    }
                }
            });
        }
    },
    Timetable: {
        project: async (timetable) => {
            return await Project.findOne({ where: { projectId: timetable.projectId }});
        },
        task: async (timetable) => {
            return await Tasks.findOne({ where: { taskId: timetable.taskId } });
        }
    },
    AdminUser: {
        group: async (user) => {
            return await AdminGroup.findOne({ where: { id: user.groupId } });
        },
        projectList: async (user) => {
            const projectMap = await ProjectUserMap.findAll({ 
                where: { userId: user.id, status: 'C002001' },
                attributes: ['projectId'],
                raw: true
            });
            const projIDs = projectMap.map( projects => projects.projectId );
            const projects = await Project.findAll({
                where: {
                    projectId: {
                        [Op.in]: projIDs
                    }
                }
            });
            return projects;
        }
    },
    Vacation: {
        user: async (vacation) => { 
            return await AdminUser.findOne({ where: { id: vacation.userId }});
        }
    },
    Mutation: {
        login: async (parent, { username, pwd }, { req }) => {
            try { 
                let userId = { id: username };
                const item = await AdminUser.findOne({ where: userId });
                data[username] = { "id": item.id, "password": item.password };

                const user = data[username];
                if (user) {
                    if (pwd === user.pwd) {
                        req.session.user = {
                            ...user,
                        };
                        return true;
                    }
                    throw new Error("Incorrect password.");
                }
                throw new Error("No Such User exists.");
            } 
            catch(err) {console.log(err);} 
        },
        putUserInfo: async (parent, args, context, info) => {
            try {
                const user = await AdminUser.findOne({ where: { id: args.id } });
                if (user) {
                    if (args.password) {
                        user.set('password', args.password);
                        user.set('updateTime', new Date().toLocaleDateString());
                    }
                    if (args.department) {
                        user.set('department', args.department);
                    }
                    if (args.address) {
                        user.set('address', args.address);
                    }
                    if (args.officePhone) {
                        user.set('officePhone', args.officePhone);
                    }
                    if (args.mobilePhone) {
                        user.set('mobilePhone', args.mobilePhone);
                    }
                    if (args.familyPhone) {
                        user.set('familyPhone', args.familyPhone);
                    }
                    return user.save();
                }
                return null;
            }
            catch(err) {console.log(err);} 
        },
        putWorkTime: async (parent, args, context, info) => {
            try {
                if (args.workHour > 0) {
                    const time = await Timetable.findOne({ where: { 
                        userId: args.userId, 
                        workDay: args.workDay,
                        projectId: args.projectId,
                        taskId: args.taskId
                    } });
                    if (time) {
                        time.set('workHour', args.workHour);
                        return time.save();
                    } else {
                        return await Timetable.create({
                            userId: args.userId,
                            workDay: args.workDay,
                            projectId: args.projectId,
                            taskId: args.taskId,
                            workHour: args.workHour
                        });
                    }
                }
                return null;
            }
            catch(err) {console.log(err);} 
        },
        putVacation: async (parent, args, context, info) => {
            try {
                var error = null;
                if (args.duration > 0) {
                    var start = new Date(args.fromDate);
                    var end = new Date(args.toDate);
                    const holiday = await Vacation.findOne({ where: { 
                        userId: args.userId, 
                        fromDate: {
                            [Op.gt]: start.setHours(0,0,0,0)
                        },
                        toDate: {
                            [Op.lt]: end.setHours(23,59,59,999)
                        },
                        duration: args.duration
                    } });
                    if (holiday) {
                        error = new Error("You've already set vacation on " + args.fromDate);
                    } else {
                        return await Vacation.create({
                            userId: args.userId, 
                            reason: args.reason,
                            fromDate: args.fromDate,
                            toDate: args.toDate,
                            duration: args.duration,
                            commonVacation: args.commonVacation,
                            vacationType: args.vacationType,
                            status: args.status,
                            createDate: new Date().toLocaleDateString()
                        });
                    }
                    return error;
                }
            }
            catch(err) {console.log(err);} 
        }
    }
 }

export default resolvers;
