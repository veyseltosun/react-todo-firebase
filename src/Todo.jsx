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

const Todo = ({todo}) => {
  return (
    <li className={style.liCompleted}>
        <div className={style.row}>
            <input type='checkbox'/>
            <p className={style.text}>{todo}</p>
            <button>{<FaRegTrashAlt/>}</button>

        </div>
    </li>
  )
}

export default Todo