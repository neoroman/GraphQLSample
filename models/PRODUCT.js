const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    productSeq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'PRODUCT_SEQ'
    },
    productName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'PRODUCT_NAME'
    },
    productType: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'PRODUCT_TYPE'
    },
    parentProductSeq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'PRODUCT',
        key: 'PRODUCT_SEQ'
      },
      field: 'PARENT_PRODUCT_SEQ'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'PRODUCT',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCT_SEQ" },
        ]
      },
      {
        name: "fk_PRODUCT_PRODUCT1",
        using: "BTREE",
        fields: [
          { name: "PARENT_PRODUCT_SEQ" },
        ]
      },
    ]
  });
};
