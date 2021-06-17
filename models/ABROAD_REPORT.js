const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abroadReport', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    abroadSeq: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'ABROAD_SEQ'
    },
    workDate: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'WORK_DATE'
    },
    place: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'PLACE'
    },
    work: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'WORK'
    },
    person: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'PERSON'
    },
    filename1: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'FILENAME1'
    },
    filename2: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'FILENAME2'
    },
    filename3: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'FILENAME3'
    }
  }, {
    sequelize,
    tableName: 'ABROAD_REPORT',
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
