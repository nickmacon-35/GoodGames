var db = require("../models");

module.exports = function (app) {
    app.get("/api/userlists", function (req, res) {
        db.UserList.findAll({}).then(function (dbUserList) {
            res.json(dbUserList);
        });
    });


    app.get("/api/userlists/:id", function (req, res) {
        db.UserList.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbUserList) {
            res.json(dbUserList);
        });
    });


    app.post("/api/userlists", function (req, res) {
        db.UserList.create(req.body).then(function (dbUserList) {
            res.json(dbUserList)
        });
    });


    app.delete("/api/users/:id", function (req, res) {
        db.UserList.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUserList) {
            res.json(dbUserList);
        });
    });
    app.put("/api/users", function (req, res) {
        db.UserList.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUserList) {
                res.json(dbUserList);
            });
    });
};