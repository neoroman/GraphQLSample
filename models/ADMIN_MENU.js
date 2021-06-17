const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminMenu', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ADMIN_MENU',
        key: 'ID'
      },
      field: 'PARENT_ID'
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'NAME'
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'TYPE'
    },
    url: {
      type: DataTypes.STRING(512),
      allowNull: true,
      field: 'URL'
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      field: 'DESCRIPTION'
    },
    menuOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'MENU_ORDER'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'CREATE_TIME'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'UPDATE_TIME'
    }
  }, {
    sequelize,
    tableName: 'ADMIN_MENU',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "FK_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "PARENT_ID" },
        ]
      },
      {
        name: "fk_ADMIN_MENU_1",
        using: "BTREE",
        fields: [
          { name: "PARENT_ID" },
        ]
      },
    ]
  });
};
