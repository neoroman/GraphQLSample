const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminGroupMenuMap', {
    groupId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ADMIN_GROUP',
        key: 'ID'
      },
      field: 'GROUP_ID'
    },
    menuId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ADMIN_MENU',
        key: 'ID'
      },
      field: 'MENU_ID'
    }
  }, {
    sequelize,
    tableName: 'ADMIN_GROUP_MENU_MAP',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
          { name: "MENU_ID" },
        ]
      },
      {
        name: "FK_GROUP_MENU_ID",
        using: "BTREE",
        fields: [
          { name: "MENU_ID" },
        ]
      },
      {
        name: "FK_MENU_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
        ]
      },
    ]
  });
};
