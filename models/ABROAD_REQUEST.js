const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abroadRequest', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    areaSeq: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'AREA_SEQ'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'USER_ID'
    },
    name: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'NAME'
    },
    deptCode: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'DEPT_CODE'
    },
    position: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'POSITION'
    },
    rank: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'RANK'
    },
    businessPlace: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'BUSINESS_PLACE'
    },
    businessStartDate: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'BUSINESS_START_DATE'
    },
    businessEndDate: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'BUSINESS_END_DATE'
    },
    projectId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'PROJECT_ID'
    },
    projectName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'PROJECT_NAME'
    },
    hotel1: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'HOTEL1'
    },
    hotel2: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'HOTEL2'
    },
    hotelStartDate1: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'HOTEL_START_DATE1'
    },
    hotelEndDate1: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'HOTEL_END_DATE1'
    },
    hotelStartDate2: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'HOTEL_START_DATE2'
    },
    hotelEndDate2: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'HOTEL_END_DATE2'
    },
    airStartDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'AIR_START_DATE'
    },
    airThroughDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'AIR_THROUGH_DATE'
    },
    airEndDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'AIR_END_DATE'
    },
    airStartRate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'AIR_START_RATE'
    },
    airThroughRate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'AIR_THROUGH_RATE'
    },
    airEndRate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'AIR_END_RATE'
    },
    airStartClass: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'AIR_START_CLASS'
    },
    airThroughClass: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'AIR_THROUGH_CLASS'
    },
    airEndClass: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'AIR_END_CLASS'
    },
    reservation1: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'RESERVATION1'
    },
    reservation2: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'RESERVATION2'
    },
    payPerWon: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'PAY_PER_WON'
    },
    status: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'STATUS'
    },
    balance: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'BALANCE'
    },
    account: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'ACCOUNT'
    },
    beforeHotel: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'BEFORE_HOTEL'
    },
    beforeEating: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'BEFORE_EATING'
    },
    beforeDay: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'BEFORE_DAY'
    },
    beforeEtc: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'BEFORE_ETC'
    },
    afterHotel: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'AFTER_HOTEL'
    },
    afterEating: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'AFTER_EATING'
    },
    afterDay: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'AFTER_DAY'
    },
    afterEtc: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'AFTER_ETC'
    },
    returnDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'RETURN_DATE'
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'REASON'
    },
    propulsion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'PROPULSION'
    },
    actionPlan: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ACTION_PLAN'
    },
    proposal: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'PROPOSAL'
    },
    remark: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'REMARK'
    },
    registerDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'REGISTER_DATE'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'UPDATE_DATE'
    },
    purpose: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'PURPOSE'
    },
    bankingDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'BANKING_DATE'
    },
    bank: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'BANK'
    },
    accountNumber: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'ACCOUNT_NUMBER'
    },
    teamName: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'TEAM_NAME'
    },
    mainOffice: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'MAIN_OFFICE'
    },
    department: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'DEPARTMENT'
    },
    accountProjectId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'ACCOUNT_PROJECT_ID'
    },
    accountProjectName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'ACCOUNT_PROJECT_NAME'
    },
    accountAreaSeq: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'ACCOUNT_AREA_SEQ'
    },
    accountStartDate: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'ACCOUNT_START_DATE'
    },
    accountEndDate: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'ACCOUNT_END_DATE'
    },
    filename1: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'FILENAME1'
    },
    etc: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ETC'
    },
    file1: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'FILE1'
    }
  }, {
    sequelize,
    tableName: 'ABROAD_REQUEST',
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
