const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminRole', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "NAME_UNIQUE",
      field: 'NAME'
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
    tableName: 'ADMIN_ROLE',
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
        name: "NAME_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
    ]
  });
};
