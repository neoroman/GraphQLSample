const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilityCost', {
    utilityCostSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'UTILITY_COST_SEQ'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'USER_ID'
    },
    projectId: {
      type: DataTypes.STRING(45),
      allowNull: false,
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
    useDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'USE_DATE'
    },
    place: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'PLACE'
    },
    cardAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'CARD_AMOUNT'
    },
    cashAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'CASH_AMOUNT'
    },
    reason: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'REASON'
    },
    remark: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'REMARK'
    }
  }, {
    sequelize,
    tableName: 'UTILITY_COST',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UTILITY_COST_SEQ" },
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
