const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abroadRequestExpenseEtc', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    abroadSeq: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'ABROAD_SEQ'
    },
    title: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'TITLE'
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'CONTENTS'
    },
    amount: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'AMOUNT'
    },
    base: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'BASE'
    },
    registerDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'REGISTER_DATE'
    },
    updateDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'UPDATE_DATE'
    },
    flag: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'FLAG'
    },
    unit: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UNIT'
    }
  }, {
    sequelize,
    tableName: 'ABROAD_REQUEST_EXPENSE_ETC',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SEQ" },
        ]
      },
    ]
  });
};
