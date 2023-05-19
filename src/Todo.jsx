import React from 'react';
import {FaRegTrashAlt} from "react-icons/fa"

const style = {
    li:`flex justify-between bg-state-200 p-4 my-2 capitalize`,
    liCompleted:`flex justify-between bg-state-400 p-4 my-2 capitalize`,

    row:`flex`,
    text:`ml-2 cursor-pointer`,
    textCompleted:`ml-2 cursor-pointer line-through`,
    button:`cursor-pointer flex items-center`

}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? style.liCompleted : style.li }>
        <div className={style.row}>
            <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? "checked" : ""}/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textCompleted : style.text}>{todo.text}</p>
            <button onClick={() => deleteTodo(todo.id)} className={style.button}>{<FaRegTrashAlt/>}</button>

        </div>
    </li>
  )
}

export default Todo