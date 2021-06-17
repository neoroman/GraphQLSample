const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cp', {
    cpSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'CP_SEQ'
    },
    cpName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'CP_NAME'
    },
    licenceNumber: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'LICENCE_NUMBER'
    },
    officerName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'OFFICER_NAME'
    },
    bankAccount: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'BANK_ACCOUNT'
    },
    contractFile: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'CONTRACT_FILE'
    },
    bankbookFile: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'BANKBOOK_FILE'
    },
    licenceFile: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'LICENCE_FILE'
    },
    minimumSettlementAmount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'MINIMUM_SETTLEMENT_AMOUNT'
    },
    fileNameCon: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'FILE_NAME_CON'
    },
    fileNameBan: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'FILE_NAME_BAN'
    },
    fileNameLic: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'FILE_NAME_LIC'
    }
  }, {
    sequelize,
    tableName: 'CP',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CP_SEQ" },
        ]
      },
    ]
  });
};
