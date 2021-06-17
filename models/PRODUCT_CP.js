const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productCp', {
    cpSeq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CP',
        key: 'CP_SEQ'
      },
      field: 'CP_SEQ'
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
    settlementRate: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'SETTLEMENT_RATE'
    }
  }, {
    sequelize,
    tableName: 'PRODUCT_CP',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CP_SEQ" },
          { name: "PRODUCT_SEQ" },
        ]
      },
      {
        name: "fk_PRODUCT_CP_PRODUCT1",
        using: "BTREE",
        fields: [
          { name: "PRODUCT_SEQ" },
        ]
      },
    ]
  });
};
