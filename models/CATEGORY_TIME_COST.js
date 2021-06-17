const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoryTimeCost', {
    createMonth: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      field: 'CREATE_MONTH'
    },
    category: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'TOTAL'
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'SALARY'
    },
    bonus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'BONUS'
    },
    incentive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'INCENTIVE'
    }
  }, {
    sequelize,
    tableName: 'CATEGORY_TIME_COST',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CREATE_MONTH" },
          { name: "CATEGORY" },
        ]
      },
    ]
  });
};
