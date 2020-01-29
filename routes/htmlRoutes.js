var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Game.findAll({}).then(function(dbGames) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbGames
      });
    });
  });

  // Load game page and pass in an game by id
  app.get("/games/:id", function(req, res) {
    db.Game.findOne({ where: { id: req.params.id } }).then(function(dbGames) {
      res.render("games", {
        example: dbGames
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
