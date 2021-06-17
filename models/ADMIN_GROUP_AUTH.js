const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminGroupAuth', {
    groupId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'GROUP_ID'
    },
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ROLE_ID'
    },
    authLevel: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'AUTH_LEVEL'
    }
  }, {
    sequelize,
    tableName: 'ADMIN_GROUP_AUTH',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
          { name: "ROLE_ID" },
        ]
      },
    ]
  });
};
