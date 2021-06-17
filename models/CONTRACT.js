const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract', {
    contractSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'CONTRACT_SEQ'
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'TITLE'
    },
    writer: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'WRITER'
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'CONTENTS'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CREATE_TIME'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'UPDATE_TIME'
    },
    filename1: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'FILENAME1'
    },
    file1: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'FILE1'
    },
    ref: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'REF'
    },
    deptCode: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'DEPT_CODE'
    }
  }, {
    sequelize,
    tableName: 'CONTRACT',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CONTRACT_SEQ" },
        ]
      },
    ]
  });
};
