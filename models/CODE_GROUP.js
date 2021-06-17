const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codeGroup', {
    codeGroupValue: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'CODE_GROUP_VALUE'
    },
    codeGroupName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'CODE_GROUP_NAME'
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'DESCRIPTION'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'CODE_GROUP',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CODE_GROUP_VALUE" },
        ]
      },
    ]
  });
};
