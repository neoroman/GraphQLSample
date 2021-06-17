const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('internalTrip', {
    internalSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'INTERNAL_SEQ'
    },
    businessDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'BUSINESS_DATE'
    },
    projectId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'PROJECT_ID'
    },
    userId: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'USER_ID'
    },
    userName: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'USER_NAME'
    },
    businessPlace: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'BUSINESS_PLACE'
    },
    attendance: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'ATTENDANCE'
    },
    leaving: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'LEAVING'
    },
    attendanceRate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'ATTENDANCE_RATE'
    },
    leavingRate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'LEAVING_RATE'
    },
    companion: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'COMPANION'
    },
    companion3: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'COMPANION3'
    },
    companion2: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'COMPANION2'
    },
    parkingRate: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'PARKING_RATE'
    },
    roadRate: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'ROAD_RATE'
    },
    registerDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      field: 'REGISTER_DATE'
    },
    deptCode: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'DEPT_CODE'
    },
    attendanceCar: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'ATTENDANCE_CAR'
    },
    leavingCar: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'LEAVING_CAR'
    },
    reductionRate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'REDUCTION_RATE'
    },
    attendanceKm: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      field: 'ATTENDANCE_KM'
    },
    leavingKm: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      field: 'LEAVING_KM'
    },
    projectCode: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'PROJECT_CODE'
    }
  }, {
    sequelize,
    tableName: 'INTERNAL_TRIP',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "INTERNAL_SEQ" },
        ]
      },
    ]
  });
};
