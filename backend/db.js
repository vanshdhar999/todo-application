const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect(
    "mongodb+srv://11avanshdhar:andromeda@cluster0.rf7nhvn.mongodb.net/todo_app",
);

//define the schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todos = mongoose.model("todos", todoSchema);

module.exports = {
    todos,
};
