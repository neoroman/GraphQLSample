const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salaryMail', {
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'USER_ID'
    },
    mailAddress: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'MAIL_ADDRESS'
    },
    mailPassword: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'MAIL_PASSWORD'
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'CREATE_DATE'
    },
    updateDate: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'UPDATE_DATE'
    }
  }, {
    sequelize,
    tableName: 'SALARY_MAIL',
    timestamps: false,
    freezeTableName: true
  });
};
