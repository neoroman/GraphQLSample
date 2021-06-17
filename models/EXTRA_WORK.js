const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('extraWork', {
    extraWorkSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'EXTRA_WORK_SEQ'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      field: 'USER_ID'
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
    useEndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'USE_END_DATE'
    },
    workType: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'WORK_TYPE'
    },
    workPlace: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'WORK_PLACE'
    },
    reason: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'REASON'
    },
    fromTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'FROM_TIME'
    },
    toTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'TO_TIME'
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'TIME'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'PRICE'
    }
  }, {
    sequelize,
    tableName: 'EXTRA_WORK',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EXTRA_WORK_SEQ" },
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
