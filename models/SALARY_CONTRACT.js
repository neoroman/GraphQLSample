const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salaryContract', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'USER_ID'
    },
    submitYear: {
      type: DataTypes.STRING(4),
      allowNull: false,
      field: 'SUBMIT_YEAR'
    },
    submitDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'SUBMIT_DATE'
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      field: 'STATUS'
    },
    userStatus: {
      type: DataTypes.STRING(16),
      allowNull: true,
      comment: "사용자상태",
      field: 'USER_STATUS'
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "이름",
      field: 'NAME'
    },
    rank: {
      type: DataTypes.STRING(16),
      allowNull: true,
      comment: "직급",
      field: 'RANK'
    },
    deptName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'DEPT_NAME'
    },
    rrn: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "주민등록번호",
      field: 'RRN'
    },
    companyJoinDate: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "입사일",
      field: 'COMPANY_JOIN_DATE'
    },
    grade: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "등급",
      field: 'GRADE'
    },
    lastyearSalary: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'LASTYEAR_SALARY'
    },
    amountIn: {
      type: DataTypes.STRING(312),
      allowNull: true,
      field: 'AMOUNT_IN'
    },
    amountRateIn: {
      type: DataTypes.STRING(312),
      allowNull: true,
      field: 'AMOUNT_RATE_IN'
    },
    annualSalary: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'ANNUAL_SALARY'
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'CREATE_DATE'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'UPDATE_DATE'
    }
  }, {
    sequelize,
    tableName: 'SALARY_CONTRACT',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SEQ" },
        ]
      },
    ]
  });
};
