const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paymentUploadHistory', {
    uploadDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: true,
      field: 'UPLOAD_DATE'
    },
    uploadFile: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'UPLOAD_FILE'
    },
    createMonth: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      field: 'CREATE_MONTH'
    }
  }, {
    sequelize,
    tableName: 'PAYMENT_UPLOAD_HISTORY',
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
