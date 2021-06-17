const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abroadExpenseUsage', {
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
    useDate: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'USE_DATE'
    },
    item: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'ITEM'
    },
    breakdown: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'BREAKDOWN'
    },
    charge: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'CHARGE'
    },
    unit: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UNIT'
    },
    exchangeRate: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'EXCHANGE_RATE'
    },
    receipt: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'RECEIPT'
    },
    remark: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'REMARK'
    },
    card: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'CARD'
    }
  }, {
    sequelize,
    tableName: 'ABROAD_EXPENSE_USAGE',
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
