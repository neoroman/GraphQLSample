var DataTypes = require("sequelize").DataTypes;
var _abroadArea = require("./ABROAD_AREA");
var _abroadClass = require("./ABROAD_CLASS");
var _abroadExpenseUsage = require("./ABROAD_EXPENSE_USAGE");
var _abroadReport = require("./ABROAD_REPORT");
var _abroadRequest = require("./ABROAD_REQUEST");
var _abroadRequestExpenseEtc = require("./ABROAD_REQUEST_EXPENSE_ETC");
var _adminAction = require("./ADMIN_ACTION");
var _adminDepartment = require("./ADMIN_DEPARTMENT");
var _adminGroup = require("./ADMIN_GROUP");
var _adminGroupAuth = require("./ADMIN_GROUP_AUTH");
var _adminGroupMenuMap = require("./ADMIN_GROUP_MENU_MAP");
var _adminMenu = require("./ADMIN_MENU");
var _adminRole = require("./ADMIN_ROLE");
var _adminUser = require("./ADMIN_USER");
var _annualVacation = require("./ANNUAL_VACATION");
var _appleExchangeRate = require("./APPLE_EXCHANGE_RATE");
var _approvalReport = require("./APPROVAL_REPORT");
var _board = require("./BOARD");
var _categoryTimeCost = require("./CATEGORY_TIME_COST");
var _code = require("./CODE");
var _codeGroup = require("./CODE_GROUP");
var _commonVacation = require("./COMMON_VACATION");
var _congratulationCondolence = require("./CONGRATULATION_CONDOLENCE");
var _contract = require("./CONTRACT");
var _cp = require("./CP");
var _cpUser = require("./CP_USER");
var _deadline = require("./DEADLINE");
var _expenditure = require("./EXPENDITURE");
var _extraWork = require("./EXTRA_WORK");
var _holiday = require("./HOLIDAY");
var _income = require("./INCOME");
var _internalTrip = require("./INTERNAL_TRIP");
var _mapDeptGroup = require("./MAP_DEPT_GROUP");
var _market = require("./MARKET");
var _marketExchangeRate = require("./MARKET_EXCHANGE_RATE");
var _marketProduct = require("./MARKET_PRODUCT");
var _meal = require("./MEAL");
var _paymentUploadHistory = require("./PAYMENT_UPLOAD_HISTORY");
var _personnelUploadHistory = require("./PERSONNEL_UPLOAD_HISTORY");
var _product = require("./PRODUCT");
var _productCp = require("./PRODUCT_CP");
var _productUploadHistory = require("./PRODUCT_UPLOAD_HISTORY");
var _project = require("./PROJECT");
var _projectReq = require("./PROJECT_REQ");
var _projectTimeCost = require("./PROJECT_TIME_COST");
var _projectTimeCostMap = require("./PROJECT_TIME_COST_MAP");
var _projectUserMap = require("./PROJECT_USER_MAP");
var _proposalRating = require("./PROPOSAL_RATING");
var _refund = require("./REFUND");
var _salary = require("./SALARY");
var _salaryContract = require("./SALARY_CONTRACT");
var _salaryMail = require("./SALARY_MAIL");
var _sales = require("./SALES");
var _salesUploadHistory = require("./SALES_UPLOAD_HISTORY");
var _tasks = require("./TASKS");
var _taskMap = require("./TASK_MAP");
var _timetable = require("./TIMETABLE");
var _training = require("./TRAINING");
var _userDept = require("./USER_DEPT");
var _utilityCost = require("./UTILITY_COST");
var _vacation = require("./VACATION");

function initModels(sequelize) {
  var abroadArea = _abroadArea(sequelize, DataTypes);
  var abroadClass = _abroadClass(sequelize, DataTypes);
  var abroadExpenseUsage = _abroadExpenseUsage(sequelize, DataTypes);
  var abroadReport = _abroadReport(sequelize, DataTypes);
  var abroadRequest = _abroadRequest(sequelize, DataTypes);
  var abroadRequestExpenseEtc = _abroadRequestExpenseEtc(sequelize, DataTypes);
  var adminAction = _adminAction(sequelize, DataTypes);
  var adminDepartment = _adminDepartment(sequelize, DataTypes);
  var adminGroup = _adminGroup(sequelize, DataTypes);
  var adminGroupAuth = _adminGroupAuth(sequelize, DataTypes);
  var adminGroupMenuMap = _adminGroupMenuMap(sequelize, DataTypes);
  var adminMenu = _adminMenu(sequelize, DataTypes);
  var adminRole = _adminRole(sequelize, DataTypes);
  var adminUser = _adminUser(sequelize, DataTypes);
  var annualVacation = _annualVacation(sequelize, DataTypes);
  var appleExchangeRate = _appleExchangeRate(sequelize, DataTypes);
  var approvalReport = _approvalReport(sequelize, DataTypes);
  var board = _board(sequelize, DataTypes);
  var categoryTimeCost = _categoryTimeCost(sequelize, DataTypes);
  var code = _code(sequelize, DataTypes);
  var codeGroup = _codeGroup(sequelize, DataTypes);
  var commonVacation = _commonVacation(sequelize, DataTypes);
  var congratulationCondolence = _congratulationCondolence(sequelize, DataTypes);
  var contract = _contract(sequelize, DataTypes);
  var cp = _cp(sequelize, DataTypes);
  var cpUser = _cpUser(sequelize, DataTypes);
  var deadline = _deadline(sequelize, DataTypes);
  var expenditure = _expenditure(sequelize, DataTypes);
  var extraWork = _extraWork(sequelize, DataTypes);
  var holiday = _holiday(sequelize, DataTypes);
  var income = _income(sequelize, DataTypes);
  var internalTrip = _internalTrip(sequelize, DataTypes);
  var mapDeptGroup = _mapDeptGroup(sequelize, DataTypes);
  var market = _market(sequelize, DataTypes);
  var marketExchangeRate = _marketExchangeRate(sequelize, DataTypes);
  var marketProduct = _marketProduct(sequelize, DataTypes);
  var meal = _meal(sequelize, DataTypes);
  var paymentUploadHistory = _paymentUploadHistory(sequelize, DataTypes);
  var personnelUploadHistory = _personnelUploadHistory(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var productCp = _productCp(sequelize, DataTypes);
  var productUploadHistory = _productUploadHistory(sequelize, DataTypes);
  var project = _project(sequelize, DataTypes);
  var projectReq = _projectReq(sequelize, DataTypes);
  var projectTimeCost = _projectTimeCost(sequelize, DataTypes);
  var projectTimeCostMap = _projectTimeCostMap(sequelize, DataTypes);
  var projectUserMap = _projectUserMap(sequelize, DataTypes);
  var proposalRating = _proposalRating(sequelize, DataTypes);
  var refund = _refund(sequelize, DataTypes);
  var salary = _salary(sequelize, DataTypes);
  var salaryContract = _salaryContract(sequelize, DataTypes);
  var salaryMail = _salaryMail(sequelize, DataTypes);
  var sales = _sales(sequelize, DataTypes);
  var salesUploadHistory = _salesUploadHistory(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var taskMap = _taskMap(sequelize, DataTypes);
  var timetable = _timetable(sequelize, DataTypes);
  var training = _training(sequelize, DataTypes);
  var userDept = _userDept(sequelize, DataTypes);
  var utilityCost = _utilityCost(sequelize, DataTypes);
  var vacation = _vacation(sequelize, DataTypes);

  adminGroup.belongsToMany(adminMenu, { as: 'menuIdAdminMenus', through: adminGroupMenuMap, foreignKey: "groupId", otherKey: "menuId" });
  adminMenu.belongsToMany(adminGroup, { as: 'groupIdAdminGroups', through: adminGroupMenuMap, foreignKey: "menuId", otherKey: "groupId" });
  cp.belongsToMany(product, { as: 'productSeqProductProductCps', through: productCp, foreignKey: "cpSeq", otherKey: "productSeq" });
  market.belongsToMany(product, { as: 'productSeqProducts', through: marketProduct, foreignKey: "marketSeq", otherKey: "productSeq" });
  product.belongsToMany(cp, { as: 'cpSeqCps', through: productCp, foreignKey: "productSeq", otherKey: "cpSeq" });
  product.belongsToMany(market, { as: 'marketSeqMarkets', through: marketProduct, foreignKey: "productSeq", otherKey: "marketSeq" });
  project.belongsTo(adminDepartment, { as: "deptCodeAdminDepartment", foreignKey: "deptCode"});
  adminDepartment.hasMany(project, { as: "projects", foreignKey: "deptCode"});
  projectReq.belongsTo(adminDepartment, { as: "deptCodeAdminDepartment", foreignKey: "deptCode"});
  adminDepartment.hasMany(projectReq, { as: "projectReqs", foreignKey: "deptCode"});
  userDept.belongsTo(adminDepartment, { as: "deptCodeAdminDepartment", foreignKey: "deptCode"});
  adminDepartment.hasMany(userDept, { as: "userDepts", foreignKey: "deptCode"});
  adminGroupMenuMap.belongsTo(adminGroup, { as: "group", foreignKey: "groupId"});
  adminGroup.hasMany(adminGroupMenuMap, { as: "adminGroupMenuMaps", foreignKey: "groupId"});
  adminUser.belongsTo(adminGroup, { as: "group", foreignKey: "groupId"});
  adminGroup.hasMany(adminUser, { as: "adminUsers", foreignKey: "groupId"});
  adminGroupMenuMap.belongsTo(adminMenu, { as: "menu", foreignKey: "menuId"});
  adminMenu.hasMany(adminGroupMenuMap, { as: "adminGroupMenuMaps", foreignKey: "menuId"});
  adminMenu.belongsTo(adminMenu, { as: "parent", foreignKey: "parentId"});
  adminMenu.hasMany(adminMenu, { as: "adminMenus", foreignKey: "parentId"});
  adminAction.belongsTo(adminRole, { as: "role", foreignKey: "roleId"});
  adminRole.hasMany(adminAction, { as: "adminActions", foreignKey: "roleId"});
  code.belongsTo(codeGroup, { as: "codeGroupValueCodeGroup", foreignKey: "codeGroupValue"});
  codeGroup.hasMany(code, { as: "codes", foreignKey: "codeGroupValue"});
  cpUser.belongsTo(cp, { as: "cpSeqCp", foreignKey: "cpSeq"});
  cp.hasMany(cpUser, { as: "cpUsers", foreignKey: "cpSeq"});
  productCp.belongsTo(cp, { as: "cpSeqCp", foreignKey: "cpSeq"});
  cp.hasMany(productCp, { as: "productCps", foreignKey: "cpSeq"});
  income.belongsTo(market, { as: "marketSeqMarket", foreignKey: "marketSeq"});
  market.hasMany(income, { as: "incomes", foreignKey: "marketSeq"});
  marketExchangeRate.belongsTo(market, { as: "marketSeqMarket", foreignKey: "marketSeq"});
  market.hasMany(marketExchangeRate, { as: "marketExchangeRates", foreignKey: "marketSeq"});
  marketProduct.belongsTo(market, { as: "marketSeqMarket", foreignKey: "marketSeq"});
  market.hasMany(marketProduct, { as: "marketProducts", foreignKey: "marketSeq"});
  refund.belongsTo(marketProduct, { as: "marketSeqMarketProduct", foreignKey: "marketSeq"});
  marketProduct.hasMany(refund, { as: "refunds", foreignKey: "marketSeq"});
  refund.belongsTo(marketProduct, { as: "productCodeMarketProduct", foreignKey: "productCode"});
  marketProduct.hasMany(refund, { as: "productCodeRefunds", foreignKey: "productCode"});
  refund.belongsTo(marketProduct, { as: "productSeqMarketProduct", foreignKey: "productSeq"});
  marketProduct.hasMany(refund, { as: "productSeqRefunds", foreignKey: "productSeq"});
  refund.belongsTo(marketProduct, { as: "areaCodeMarketProduct", foreignKey: "areaCode"});
  marketProduct.hasMany(refund, { as: "areaCodeRefunds", foreignKey: "areaCode"});
  marketProduct.belongsTo(product, { as: "productSeqProduct", foreignKey: "productSeq"});
  product.hasMany(marketProduct, { as: "marketProducts", foreignKey: "productSeq"});
  product.belongsTo(product, { as: "parentProductSeqProduct", foreignKey: "parentProductSeq"});
  product.hasMany(product, { as: "products", foreignKey: "parentProductSeq"});
  productCp.belongsTo(product, { as: "productSeqProduct", foreignKey: "productSeq"});
  product.hasMany(productCp, { as: "productCps", foreignKey: "productSeq"});

  return {
    abroadArea,
    abroadClass,
    abroadExpenseUsage,
    abroadReport,
    abroadRequest,
    abroadRequestExpenseEtc,
    adminAction,
    adminDepartment,
    adminGroup,
    adminGroupAuth,
    adminGroupMenuMap,
    adminMenu,
    adminRole,
    adminUser,
    annualVacation,
    appleExchangeRate,
    approvalReport,
    board,
    categoryTimeCost,
    code,
    codeGroup,
    commonVacation,
    congratulationCondolence,
    contract,
    cp,
    cpUser,
    deadline,
    expenditure,
    extraWork,
    holiday,
    income,
    internalTrip,
    mapDeptGroup,
    market,
    marketExchangeRate,
    marketProduct,
    meal,
    paymentUploadHistory,
    personnelUploadHistory,
    product,
    productCp,
    productUploadHistory,
    project,
    projectReq,
    projectTimeCost,
    projectTimeCostMap,
    projectUserMap,
    proposalRating,
    refund,
    salary,
    salaryContract,
    salaryMail,
    sales,
    salesUploadHistory,
    tasks,
    taskMap,
    timetable,
    training,
    userDept,
    utilityCost,
    vacation,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
