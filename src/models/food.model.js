// Our table schema
const food = (sequelize, DataTypes) => sequelize.define('Food', {

    favariteFood1: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    favariteFood2: {
      type: DataTypes.STRING,
    }
  });
  
  module.exports = food;