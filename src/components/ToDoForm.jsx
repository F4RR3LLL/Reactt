import React from 'react';

function ToDoForm() {
    return (
        <form action="">
            <div style={{marginBottom:'0.25em'}}>
                 <label style={{marginRight:'0.25em'}} htmlFor="todoButtton">
                    Input Kerjaan Baru
                </label>
            <input type="text" name="todo-button" id="todoButton"/>
            </div>
            <div>
                <button type="submit">Tambah ToDo</button>
            </div>
        </form>
    );
}

export default ToDoForm;

