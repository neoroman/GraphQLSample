const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('refund', {
    marketSeq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'MARKET_PRODUCT',
        key: 'MARKET_SEQ'
      },
      field: 'MARKET_SEQ'
    },
    productCode: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'MARKET_PRODUCT',
        key: 'PRODUCT_CODE'
      },
      field: 'PRODUCT_CODE'
    },
    productSeq: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'MARKET_PRODUCT',
        key: 'PRODUCT_SEQ'
      },
      field: 'PRODUCT_SEQ'
    },
    areaCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'MARKET_PRODUCT',
        key: 'AREA_CODE'
      },
      field: 'AREA_CODE'
    },
    refundDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: true,
      field: 'REFUND_DATE'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'QUANTITY'
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'PRICE'
    },
    share: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'SHARE'
    },
    cpShare: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'CP_SHARE'
    },
    currency: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'CURRENCY'
    },
    depositDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'DEPOSIT_DATE'
    },
    orderId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      field: 'ORDER_ID'
    }
  }, {
    sequelize,
    tableName: 'REFUND',
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
          { name: "REFUND_DATE" },
          { name: "ORDER_ID" },
        ]
      },
      {
        name: "fk_REFUND_MARKET_PRODUCT1",
        using: "BTREE",
        fields: [
          { name: "MARKET_SEQ" },
          { name: "PRODUCT_CODE" },
          { name: "PRODUCT_SEQ" },
          { name: "AREA_CODE" },
        ]
      },
    ]
  });
};
