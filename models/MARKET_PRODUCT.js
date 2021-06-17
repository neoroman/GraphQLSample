const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marketProduct', {
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
    productCode: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      field: 'PRODUCT_CODE'
    },
    productSeq: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PRODUCT',
        key: 'PRODUCT_SEQ'
      },
      field: 'PRODUCT_SEQ'
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
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'PRICE'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'MARKET_PRODUCT',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MARKET_SEQ" },
          { name: "PRODUCT_CODE" },
          { name: "PRODUCT_SEQ" },
          { name: "AREA_CODE" },
        ]
      },
      {
        name: "fk_MARKET_PRODUCT_1",
        using: "BTREE",
        fields: [
          { name: "MARKET_SEQ" },
        ]
      },
      {
        name: "fk_MARKET_PRODUCT_2",
        using: "BTREE",
        fields: [
          { name: "PRODUCT_SEQ" },
        ]
      },
    ]
  });
};
