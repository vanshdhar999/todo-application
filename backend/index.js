const { createTodoSchema, updateTodo } = require("./types");
const { todos } = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;

// Get method endpoint

app.get("/signup", function(req, res) {
    return res.status(200).json({
        msg: "Everything is okay !",
    });
});

app.get("/signin", function(req, res) {
    return res.status(200).json({
        msg: "Everything is okay !",
    });
});

app.get("/todo", async function(req, res) {
    try {
        const response = await todos.find();

        if (response.length == 0) {
            return res.status(200).json({
                msg: "No todos are listed yet",
            });
        }
        return res.status(200).json({
            todos: response,
        });
    } catch (error) {
        return error;
    }
});

app.post("/todo", async function(req, res) {
    /*
                     User payload:
                
                     body = {
                            title: title,
                            description: description
                     }
                     */

    const userPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(userPayload);

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Wrong input !",
        });
    }

    //save the todo in the database.
    await todos.create({
        title: userPayload.title,
        description: userPayload.description,
        completed: false,
    });
    return res.status(200).json({
        msg: "todo saved !",
    });
});

app.put("/completed", async function(req, res) {
    const todoId = req.body;

    const parsedId = updateTodo.safeParse(todoId);

    if (!parsedId.success) {
        return res.status(411).json({
            msg: "Wrong input !",
        });
    }

    await todos.update(
        {
            _id: todoId.id,
        },
        { completed: true },
    );

    return res.status(200).json({
        msg: "Marked as done !",
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});
