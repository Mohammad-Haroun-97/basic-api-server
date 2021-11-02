// Our table schema
const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {

    dress: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    shirts: {
      type: DataTypes.STRING,
    }
  });
  
  module.exports = clothes;