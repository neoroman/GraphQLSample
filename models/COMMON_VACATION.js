const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commonVacation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vacationType: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'VACATION_TYPE'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'DATE'
    },
    duration: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'DURATION'
    },
    reason: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'REASON'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'COMMON_VACATION',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
