const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('code', {
    codeGroupValue: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CODE_GROUP',
        key: 'CODE_GROUP_VALUE'
      },
      field: 'CODE_GROUP_VALUE'
    },
    codeValue: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      field: 'CODE_VALUE'
    },
    codeName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'CODE_NAME'
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'DESCRIPTION'
    },
    codeOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      field: 'CODE_ORDER'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'CODE',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CODE_GROUP_VALUE" },
          { name: "CODE_VALUE" },
          { name: "CODE_ORDER" },
        ]
      },
    ]
  });
};
