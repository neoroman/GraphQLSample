const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holiday', {
    holidayId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'HOLIDAY_ID'
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'START_DATE'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'END_DATE'
    },
    text: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'TEXT'
    },
    time: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'TIME'
    },
    sday: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'SDAY'
    },
    eday: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'EDAY'
    },
    length: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'LENGTH'
    },
    sweek: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'SWEEK'
    },
    sorder: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'SORDER'
    },
    firstChunk: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'FIRST_CHUNK'
    },
    lastChunk: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'LAST_CHUNK'
    },
    pidTime: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'PID_TIME'
    },
    eventPid: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'EVENT_PID'
    },
    eventLength: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'EVENT_LENGTH'
    },
    recPattern: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'REC_PATTERN'
    },
    recType: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'REC_TYPE'
    },
    startDateT: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'START_DATE_T'
    },
    endDateT: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'END_DATE_T'
    }
  }, {
    sequelize,
    tableName: 'HOLIDAY',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "HOLIDAY_ID" },
        ]
      },
    ]
  });
};
