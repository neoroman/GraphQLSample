const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cpUser', {
    cpSeq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CP',
        key: 'CP_SEQ'
      },
      field: 'CP_SEQ'
    },
    cpUserSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'CP_USER_SEQ'
    },
    cpUserName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'CP_USER_NAME'
    },
    contactNumber: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'CONTACT_NUMBER'
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'EMAIL'
    }
  }, {
    sequelize,
    tableName: 'CP_USER',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CP_USER_SEQ" },
          { name: "CP_SEQ" },
        ]
      },
      {
        name: "fk_CP_USER_1",
        using: "BTREE",
        fields: [
          { name: "CP_SEQ" },
        ]
      },
      {
        name: "fk_CP_USER_CP1",
        using: "BTREE",
        fields: [
          { name: "CP_SEQ" },
        ]
      },
    ]
  });
};
