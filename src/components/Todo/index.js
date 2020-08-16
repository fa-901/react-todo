import React, { Fragment, useState } from 'react';
import TodoItem from './TodoItem';

export default function Todo(props) {
    const [currentInput, inputUpdate] = useState('');
    const [list, listUpdate] = useState([]);

    function handleInput(e) {
        const { value } = e.currentTarget;
        inputUpdate(value);
    }

    function handleKeyDown(e) {
        if (e.key !== 'Enter') {
            return;
        }
        const c = [...list];
        c.push(currentInput);
        listUpdate(c);
        inputUpdate('');
    }

    function updateItem(val, index) {
        const c = [...list];
        c[index] = val;
        listUpdate(c);
    }

    function deleteItem(index) {
        const c = [...list];
        c.splice(index, 1);
        listUpdate(c);
    }

    let todoList = list.map((v, i) => {
        return (
            <TodoItem
                key={i}
                label={v}
                updateTask={(c) => { updateItem(c, i) }}
                deleteItem={() => { deleteItem(i) }}
            />
        )
    })

    return (
        <Fragment>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder='Add a new task'
                    value={currentInput}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                />
                <small className="form-text text-muted">Press 'Enter' to insert</small>
            </div>
            <ul className="list-group">
                {todoList}
            </ul>
        </Fragment>
    )
}