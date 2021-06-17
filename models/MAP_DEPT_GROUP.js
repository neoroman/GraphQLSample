const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mapDeptGroup', {
    groupid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deptCode: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'DEPT_CODE'
    },
    deptName: {
      type: DataTypes.STRING(128),
      allowNull: true,
      field: 'DEPT_NAME'
    }
  }, {
    sequelize,
    tableName: 'MAP_DEPT_GROUP',
    timestamps: false,
    freezeTableName: true
  });
};
