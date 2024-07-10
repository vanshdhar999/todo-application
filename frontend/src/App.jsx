import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
function App() {
    const [todos, setTodos] = useState([]);

    fetch("http://localhost:3000/todo").then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
    });
    return (
        <div>
            <div>
                <h1>TODO APPLICATION</h1>
            </div>
            <CreateTodo></CreateTodo>
            <Todos todos={todos}></Todos>
        </div>
    );
}

export default App;
