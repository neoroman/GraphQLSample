const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('market', {
    marketSeq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'MARKET_SEQ'
    },
    marketName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'MARKET_NAME'
    },
    marketType: {
      type: DataTypes.STRING(8),
      allowNull: true,
      field: 'MARKET_TYPE'
    }
  }, {
    sequelize,
    tableName: 'MARKET',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MARKET_SEQ" },
        ]
      },
    ]
  });
};
