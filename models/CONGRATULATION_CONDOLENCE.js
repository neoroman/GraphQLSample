const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('congratulationCondolence', {
    congratulationSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'CONGRATULATION_SEQ'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'USER_ID'
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'CREATE_DATE'
    },
    submitDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SUBMIT_DATE'
    },
    target: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'TARGET'
    },
    customerCompany: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: "",
      field: 'CUSTOMER_COMPANY'
    },
    customerName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: "",
      field: 'CUSTOMER_NAME'
    },
    reason: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'REASON'
    },
    useDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'USE_DATE'
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'AMOUNT'
    },
    isWeath: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'IS_WEATH'
    },
    weathAddress: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'WEATH_ADDRESS'
    },
    contact: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'CONTACT'
    },
    fileName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'FILE_NAME'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: "1",
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'CONGRATULATION_CONDOLENCE',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CONGRATULATION_SEQ" },
        ]
      },
    ]
  });
};
