const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectReq', {
    projectId: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      field: 'PROJECT_ID'
    },
    createDate: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      field: 'CREATE_DATE'
    },
    deptCode: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      references: {
        model: 'ADMIN_DEPARTMENT',
        key: 'DEPT_CODE'
      },
      field: 'DEPT_CODE'
    },
    userId: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      field: 'USER_ID'
    },
    projectCode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "",
      field: 'PROJECT_CODE'
    },
    intro: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "None",
      field: 'INTRO'
    },
    profit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'PROFIT'
    },
    hwOut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'HW_OUT'
    },
    hwIn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'HW_IN'
    },
    hwVendor: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'HW_VENDOR'
    },
    pkgOut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'PKG_OUT'
    },
    pkgIn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'PKG_IN'
    },
    pkgVendor: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'PKG_VENDOR'
    },
    devOut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'DEV_OUT'
    },
    devIn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'DEV_IN'
    },
    devVendor: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'DEV_VENDOR'
    },
    keepOut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'KEEP_OUT'
    },
    keepIn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'KEEP_IN'
    },
    keepVendor: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'KEEP_VENDOR'
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'TOTAL'
    },
    netSales: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'NET_SALES'
    },
    devMem: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'DEV_MEM'
    },
    salesMem: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'SALES_MEM'
    },
    status: {
      type: DataTypes.STRING(16),
      allowNull: true,
      field: 'STATUS'
    }
  }, {
    sequelize,
    tableName: 'PROJECT_REQ',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PROJECT_ID" },
        ]
      },
      {
        name: "fk_ADMIN_DEPARTMENT_DEPT_CODE2",
        using: "BTREE",
        fields: [
          { name: "DEPT_CODE" },
        ]
      },
    ]
  });
};
