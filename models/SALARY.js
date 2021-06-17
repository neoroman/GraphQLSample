const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salary', {
    createMonth: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: "",
      field: 'CREATE_MONTH'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'USER_ID'
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
    tableName: 'SALARY',
    timestamps: false,
    freezeTableName: true
  });
};
