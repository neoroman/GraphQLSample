const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vacation', {
    vacationSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'VACATION_SEQ'
    },
    userId: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      field: 'USER_ID'
    },
    vacationType: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'VACATION_TYPE'
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
    reason: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'REASON'
    },
    fromDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'FROM_DATE'
    },
    toDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'TO_DATE'
    },
    duration: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'DURATION'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    },
    commonVacation: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'COMMON_VACATION'
    }
  }, {
    sequelize,
    tableName: 'VACATION',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "VACATION_SEQ" },
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
