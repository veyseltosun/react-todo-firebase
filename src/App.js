import {AiOutlinePlus} from "react-icons/ai";
import {db} from "./firebase";
import {query, collection, onSnapshot, updateDoc, doc} from "firebase/firestore";


import Todo from "./Todo";
import { useState, useEffect } from "react";
const style = {
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`,
  container:`bg-slate-100 max-w-[500px] rounded-md shsdow-xl p-4`,
  heading:`text-3xl font-bold text-center text-gray-800 p-2`,
  form:`flex justify-between`,
  input:`border p-2 w-full text-xl`,
  button:`border p-4 ml-2 bg-purple-500 text-state-100`,
  count:`text-center p-2`,
  
}

function App() {
  const [todos, setTodos] = useState([]);

  // create todo
  // read todo from firebase
  useEffect(() => {
     
    const q = query(collection(db, "todos"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id:doc.id})

      })
      setTodos(todosArr)

    })
    return () => unsubscribe

  },[])
  // update todo
  const toggleComplete = async (todo) => {
     await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
     })
  }
  // delete todo



  return (
    <div className={style.bg}>

     <div className={style.container}>
      <h3 className={style.heading}>
        Todo App
      </h3>
      <form className={style.form}>
        <input className={style.form} type="text" placeholder="Add Todo"/>
        <button className={style.button}><AiOutlinePlus justify-between bg-state-200 p-4 my-2 capitalizeutlinePlus size={30}/></button>
      </form>
      <ul>
        {todos.map( (todo, index) => {
          return(

            <Todo key={index} todo={todo} toggleComplete={toggleComplete}/>
          )

        })}
      </ul>
      <p className={style.count}>You have {todos.length} todos</p>
     </div>
      
    </div>
  );
}

export default App;
