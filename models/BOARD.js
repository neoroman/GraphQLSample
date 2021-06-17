const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board', {
    boardSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'BOARD_SEQ'
    },
    boardTitle: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'BOARD_TITLE'
    },
    boardWriter: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'BOARD_WRITER'
    },
    boardContents: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'BOARD_CONTENTS'
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
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    },
    appraise: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'APPRAISE'
    },
    boardCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'BOARD_CODE'
    },
    deptCode: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'DEPT_CODE'
    }
  }, {
    sequelize,
    tableName: 'BOARD',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BOARD_SEQ" },
        ]
      },
      {
        name: "fk_BOARD_1",
        using: "BTREE",
        fields: [
          { name: "BOARD_WRITER" },
        ]
      },
    ]
  });
};
