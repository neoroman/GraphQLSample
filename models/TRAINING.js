const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training', {
    trainingSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'TRAINING_SEQ'
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
    submitDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SUBMIT_DATE'
    },
    place: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'PLACE'
    },
    fromDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'FROM_DATE'
    },
    toDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'TO_DATE'
    },
    contents: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'CONTENTS'
    },
    object: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      field: 'OBJECT'
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'AMOUNT'
    },
    how: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'HOW'
    },
    area: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'AREA'
    },
    fileName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'FILE_NAME'
    },
    status: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'TRAINING',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TRAINING_SEQ" },
          { name: "USER_ID" },
        ]
      },
      {
        name: "fk_EDUCATION_1",
        using: "BTREE",
        fields: [
          { name: "PROJECT_ID" },
        ]
      },
    ]
  });
};
