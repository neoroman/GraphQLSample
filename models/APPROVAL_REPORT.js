const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approvalReport', {
    reportSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'REPORT_SEQ'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'USER_ID'
    },
    deptCode: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'DEPT_CODE'
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CREATE_DATE'
    },
    submitDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'SUBMIT_DATE'
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'TITLE'
    },
    contents: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'CONTENTS'
    },
    fileName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'FILE_NAME'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    },
    projectId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'PROJECT_ID'
    },
    appropriation: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'APPROPRIATION'
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
      field: 'AMOUNT'
    }
  }, {
    sequelize,
    tableName: 'APPROVAL_REPORT',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "REPORT_SEQ" },
          { name: "USER_ID" },
        ]
      },
      {
        name: "fk_APPROVAL_REPORT_1",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
