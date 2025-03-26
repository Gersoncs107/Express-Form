const usersStorage = require("../storages/usersStorage")
const {body, validationResult} = require("express-validator")

const alphaErr = "must only contain letters."
const lengthErr = "must be between 1 and 10 characters."

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