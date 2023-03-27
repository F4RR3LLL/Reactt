import React from 'react';

const todos = ['Belajar React Fundamental', 'Ngoding Sampai Bisa'];

function ToDoList() {
    return (
        // Ini namanya fragment, penahan (seperti div)
        <>
            <h3>Listing ToDo List</h3>
            <ul>
            {todos.map((todo) => {
                return <li>{todo}</li>;
            })}
            </ul>
        </>
    );
}

export default ToDoList;
