const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meal', {
    mealSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'MEAL_SEQ'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'USER_ID'
    },
    projectId: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'PROJECT_ID'
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CREATE_DATE'
    },
    useDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'USE_DATE'
    },
    baseAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'BASE_AMOUNT'
    },
    useAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'USE_AMOUNT'
    },
    requestAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'REQUEST_AMOUNT'
    },
    adjustedAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
      field: 'ADJUSTED_AMOUNT'
    },
    remark: {
      type: DataTypes.STRING(400),
      allowNull: true,
      defaultValue: "",
      field: 'REMARK'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    },
    memberCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'MEMBER_COUNT'
    }
  }, {
    sequelize,
    tableName: 'MEAL',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MEAL_SEQ" },
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
