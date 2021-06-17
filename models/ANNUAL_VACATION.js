const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('annualVacation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'USER_ID'
    },
    userName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'USER_NAME'
    },
    submitYear: {
      type: DataTypes.STRING(4),
      allowNull: false,
      field: 'SUBMIT_YEAR'
    },
    days: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'DAYS'
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'CREATE_DATE'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'UPDATE_DATE'
    }
  }, {
    sequelize,
    tableName: 'ANNUAL_VACATION',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "ANNUAL_VACATION_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "SUBMIT_YEAR" },
        ]
      },
    ]
  });
};
