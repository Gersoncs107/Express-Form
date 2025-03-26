const usersStorage = require("../storages/usersStorage")
const {body, validationResult} = require("express-validator")

exports.usersListGet = (req, res) => {
    res.render("index",{
        title: "User List",
        users: usersStorage.getUsers()
    })
}

exports.usersCreateGet = (req, res) => {
    res.render("createUser", {
        title: "Create User"
    })
}

exports.usersCreatePost = (req, res) => {
    const {firstName, lastName} = req.body
    usersStorage.addUser({firstName, lastName})
    res.redirect("/")
}