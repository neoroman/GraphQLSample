const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deadline', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deadlineDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'DEADLINE_DATE'
    },
    deadlineMonth: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      field: 'DEADLINE_MONTH'
    },
    contents: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'CONTENTS'
    }
  }, {
    sequelize,
    tableName: 'DEADLINE',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
          { name: "DEADLINE_MONTH" },
        ]
      },
    ]
  });
};
