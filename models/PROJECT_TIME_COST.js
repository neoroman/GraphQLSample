const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectTimeCost', {
    createMonth: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true,
      field: 'CREATE_MONTH'
    },
    deptCode: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      field: 'DEPT_CODE'
    },
    projectId: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
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
    tableName: 'PROJECT_TIME_COST',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CREATE_MONTH" },
          { name: "DEPT_CODE" },
          { name: "PROJECT_ID" },
        ]
      },
    ]
  });
};
