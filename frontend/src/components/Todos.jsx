export function Todos({ todos }) {
    if (!todos) {
        return (
            <div>
                <h1>No todos are listed yet !</h1>
            </div>
        );
    }
    return (
        <div>
            {todos.map(function(todo) {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h1>{todo.description}</h1>

                        {todo.completed == true ? (
                            <h2>Completed</h2>
                        ) : (
                            <button
                                id="completed-todo"
                                onClick={(e) => {
                                    const button = e.target;
                                    button.innerHTML = "Completed";
                                }}
                            >
                                Mark as Complete
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
