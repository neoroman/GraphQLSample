const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expenditure', {
    expenditureSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'EXPENDITURE_SEQ'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'USER_ID'
    },
    projectId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      field: 'PROJECT_ID'
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
    purpose: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'PURPOSE'
    },
    useAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'USE_AMOUNT'
    },
    adjustedAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'ADJUSTED_AMOUNT'
    },
    useDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'USE_DATE'
    },
    taxCode: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'TAX_CODE'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'EXPENDITURE',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EXPENDITURE_SEQ" },
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
