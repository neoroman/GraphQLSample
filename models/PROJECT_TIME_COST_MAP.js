const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectTimeCostMap', {
    createMonth: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: "",
      field: 'CREATE_MONTH'
    },
    deptCode: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "0",
      field: 'DEPT_CODE'
    },
    projectId: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      field: 'PROJECT_ID'
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'TOTAL'
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'SALARY'
    },
    bonus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'BONUS'
    },
    incentive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'INCENTIVE'
    }
  }, {
    sequelize,
    tableName: 'PROJECT_TIME_COST_MAP',
    timestamps: false,
    freezeTableName: true
  });
};
