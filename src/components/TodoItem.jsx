import React from "react"
import "./TodoItem.scss"
function TodoItem() {
    return (
        <div className="todo-item">
            <input className="checkbox" type = "checkbox" />
            <p className="text">Placehoder text here</p>
        </div>
    );
}

export default TodoItem;