const express = require("express")
const app = express()
const usersRoute = require("./routes/usersRoute")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use("/", usersRoute)