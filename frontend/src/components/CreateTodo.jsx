import { useState } from "react";

export function CreateTodo() {
    // create local variables for the title and description

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="Enter the title"
                style={{
                    padding: 10,
                    margin: 10,
                }}
                //using the onchange function set the value of title and description
                onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                }}
            ></input>
            <br></br>
            <input
                style={{
                    padding: 10,
                    margin: 10,
                }}
                type="text"
                placeholder="Enter the description"
                onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                }}
            ></input>
            <br></br>

            <button
                id="add-todo-button"
                style={{
                    padding: 10,
                    margin: 10,
                }}
                onClick={function() {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            "Content-type": "application/json",
                        },
                    }).then(alert("todo added"));
                }}
            >
                Add todo
            </button>
        </div>
    );
}
