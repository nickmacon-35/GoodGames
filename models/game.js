module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    game_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    game_type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    played: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Game.associate = function(models){
   // Game.hasMany(models.List);
  };
  return Game;
};
