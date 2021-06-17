const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proposalRating', {
    articleNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      field: 'article_no'
    },
    raterId: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      field: 'rater_id'
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PROPOSAL_RATING',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "article_no" },
          { name: "rater_id" },
        ]
      },
    ]
  });
};
