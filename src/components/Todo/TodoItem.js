import React, { useState, useRef, useEffect } from 'react';

export default function TodoItem(props) {
    const [currentInput, inputUpdate] = useState(props.label);
    const [isEdit, toggleEdit] = useState(false);

    useEffect(() => {
        if (isEdit) {
            inputRef.current.focus();
        }
    }, [isEdit])

    function handleInput(e) {
        const { value } = e.currentTarget;
        inputUpdate(value);
    }

    function handleKeyDown(e) {
        if (e.key !== 'Enter') {
            return;
        }
        updateTask();
    }

    function updateTask() {
        props.updateTask(currentInput);
        toggleEdit(!isEdit);
    }

    const inputRef = useRef();

    var editBox = (
        <input
            className="form-control"
            placeholder='Edit task'
            value={currentInput}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            onBlur={updateTask}
            ref={inputRef}
        />
    )
    var dislayItem = isEdit ? editBox : props.label;
    return (
        <li className="list-group-item">
            <div className='d-flex flex-row align-items-center'>
                <Button
                    className='btn btn-link mr-2'
                    onClick={() => { toggleEdit(!isEdit) }}
                    toolTip='Edit'
                >
                    <i className='far fa-edit'></i>
                </Button>
                <div>
                    {dislayItem}
                </div>
                {!isEdit && <Button
                    className='btn btn-link ml-auto'
                    onClick={props.deleteItem}
                    toolTip='Delete'
                >
                    <i className='far fa-trash-alt'></i>
                </Button>}
            </div>
        </li>
    )
}

function Button(props) {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
        // data-toggle="tooltip"
        // data-placement="bottom"
        // title={props.toolTip}
        >
            {props.children}
        </button>
    )
}