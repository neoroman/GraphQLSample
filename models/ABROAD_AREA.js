const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abroadArea', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    division: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'DIVISION'
    },
    nationName: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'NATION_NAME'
    },
    flag: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'FLAG'
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
    }
  }, {
    sequelize,
    tableName: 'ABROAD_AREA',
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
