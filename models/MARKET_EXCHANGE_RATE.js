const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marketExchangeRate', {
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
    baselineDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: true,
      field: 'BASELINE_DATE'
    },
    areaCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'AREA_CODE'
    },
    currency: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'CURRENCY'
    },
    exchangeRate: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'EXCHANGE_RATE'
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'DESCRIPTION'
    },
    fileName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'FILE_NAME'
    },
    cashBuying: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'CASH_BUYING'
    },
    receiving: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'RECEIVING'
    }
  }, {
    sequelize,
    tableName: 'MARKET_EXCHANGE_RATE',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MARKET_SEQ" },
          { name: "BASELINE_DATE" },
          { name: "AREA_CODE" },
        ]
      },
    ]
  });
};
