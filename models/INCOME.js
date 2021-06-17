const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('income', {
    marketSeq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'MARKET',
        key: 'MARKET_SEQ'
      },
      field: 'MARKET_SEQ'
    },
    depositDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: true,
      field: 'DEPOSIT_DATE'
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'START_DATE'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'END_DATE'
    },
    incomeAmount: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'INCOME_AMOUNT'
    }
  }, {
    sequelize,
    tableName: 'INCOME',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MARKET_SEQ" },
          { name: "DEPOSIT_DATE" },
        ]
      },
      {
        name: "fk_INCOME_1",
        using: "BTREE",
        fields: [
          { name: "MARKET_SEQ" },
        ]
      },
    ]
  });
};
