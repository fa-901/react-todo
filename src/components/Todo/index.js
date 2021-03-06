import React, { Fragment, useState, useEffect } from 'react';
import types from './showTypes.json';
import TodoItem from './TodoItem';

export default function Todo(props) {
    const [currentInput, inputUpdate] = useState('');
    const [list, listUpdate] = useState([]);
    const [showType, changeShow] = useState('All');

    useEffect(() => {
        if (typeof (Storage) !== "undefined") {
            let data = localStorage.getItem("list");
            data = data ? JSON.parse(data) : [];
            listUpdate(data);
        }
    }, []);

    function handleInput(e) {
        const { value } = e.currentTarget;
        inputUpdate(value);
    }

    function updateFn(e) {
        listUpdate(e);
        localStorage.setItem("list", JSON.stringify(e));
    }

    function handleKeyDown(e) {
        if (e.key !== 'Enter') {
            return;
        }
        const c = [...list];
        c.push({ label: currentInput, checked: false });
        updateFn(c);
        inputUpdate('');
    }

    function updateItem(val, index) {
        const c = [...list];
        c[index].label = val;
        updateFn(c);
    }

    function deleteItem(index) {
        const c = [...list];
        c.splice(index, 1);
        updateFn(c);
    }

    function check(val, index) {
        const c = [...list];
        c[index].checked = val;
        updateFn(c);
    }

    let todoList = list.map((v, i) => {
        return (
            <TodoItem
                i={i}
                key={i}
                label={v.label}
                checked={v.checked}
                updateTask={(c) => { updateItem(c, i) }}
                deleteItem={() => { deleteItem(i) }}
                check={(c) => { check(c, i) }}
            />
        )
    });

    let displayList = todoList.filter((v) => {
        switch (showType) {
            case 'checked':
                return v.props.checked === true;
            case 'unchecked':
                return v.props.checked === false;
            default:
                return true;
        }
    });

    let listHelper = list.length > 0 && (<small className="form-text text-muted">Click on text to edit</small>);

    let btnList = types.map((v) => {
        return (
            <button
                key={v.value}
                onClick={() => { changeShow(v.value) }}
                className={`semi-bold btn btn-sm ${v.value === showType ? 'btn-primary' : 'btn-outline-primary'}`}>
                {v.label}
            </button>
        )
    });

    let btnGroup = list.length > 0 && (
        <div className="mt-4 btn-group btn-block">
            {btnList}
        </div>
    );

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
                {displayList}
            </ul>
            {listHelper}
            {btnGroup}
        </Fragment>
    )
}