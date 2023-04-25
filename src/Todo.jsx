import React from 'react';
import {FaRegTrashAlt} from "react-icons/fa"

const style = {
    li:``,
    row:``,
    text:``,

}

const Todo = ({todo}) => {
  return (
    <li className={style.li}>
        <div className={style.row}>
            <input type='checkbox'/>
            <p className={style.text}>{todo}</p>
            <button>{<FaRegTrashAlt/>}</button>

        </div>
    </li>
  )
}

export default Todo