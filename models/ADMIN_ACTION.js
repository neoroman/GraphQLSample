const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminAction', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(512),
      allowNull: false,
      unique: "URL_UNIQUE",
      field: 'URL'
    },
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ADMIN_ROLE',
        key: 'ID'
      },
      field: 'ROLE_ID'
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "NAME_UNIQUE",
      field: 'NAME'
    },
    type: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'TYPE'
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      field: 'DESCRIPTION'
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
    tableName: 'ADMIN_ACTION',
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
        name: "URL_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "URL" },
        ]
      },
      {
        name: "NAME_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
      {
        name: "FK_ROLE_FUNCTION",
        using: "BTREE",
        fields: [
          { name: "ROLE_ID" },
        ]
      },
    ]
  });
};
