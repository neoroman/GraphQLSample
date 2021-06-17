const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salesUploadHistory', {
    uploadDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: true,
      field: 'UPLOAD_DATE'
    },
    productSeq: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'PRODUCT_SEQ'
    },
    salesDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'SALES_DATE'
    },
    marketType: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'MARKET_TYPE'
    },
    uploadFile: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'UPLOAD_FILE'
    },
    salesType: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'SALES_TYPE'
    }
  }, {
    sequelize,
    tableName: 'SALES_UPLOAD_HISTORY',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UPLOAD_DATE" },
        ]
      },
    ]
  });
};
