const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abroadClass', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    position: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'POSITION'
    },
    division: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'DIVISION'
    },
    hotelRate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'HOTEL_RATE'
    },
    eatingRate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'EATING_RATE'
    },
    dayRate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'DAY_RATE'
    },
    registerDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'REGISTER_DATE'
    },
    updateDate: {
      type: DataTypes.STRING(14),
      allowNull: true,
      field: 'UPDATE_DATE'
    },
    flag: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'FLAG'
    }
  }, {
    sequelize,
    tableName: 'ABROAD_CLASS',
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
