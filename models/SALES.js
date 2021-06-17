const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales', {
    marketSeq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
      field: 'PRODUCT_SEQ'
    },
    areaCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'AREA_CODE'
    },
    salesDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: true,
      field: 'SALES_DATE'
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
    tableName: 'SALES',
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
          { name: "SALES_DATE" },
          { name: "ORDER_ID" },
        ]
      },
    ]
  });
};
