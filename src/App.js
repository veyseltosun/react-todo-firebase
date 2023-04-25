
const style = {
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`,
  heading:``,
  form:``,
  input:``,
  button:``,
}

function App() {
  return (
    <div className={style.bg}>
     <div className={style.container}>
      <h3 className={style.heading}>
        Todo App
      </h3>
      <form className={style.form}>
        <input className={style.form} type="text" placeholder="Add Todo"/>
        <button className={style.button}>ADD</button>
      </form>
     </div>
      
    </div>
  );
}

export default App;
