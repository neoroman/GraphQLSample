const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appleExchangeRate', {
    marketSeq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'MARKET_SEQ'
    },
    depositDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: true,
      field: 'DEPOSIT_DATE'
    },
    currency: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    fxRate: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'FX_RATE'
    }
  }, {
    sequelize,
    tableName: 'APPLE_EXCHANGE_RATE',
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
          { name: "CURRENCY" },
        ]
      },
    ]
  });
};
