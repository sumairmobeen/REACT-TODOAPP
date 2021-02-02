import React, { useState } from "react";
import reactDOM from "react-dom";
import css from  "./index.css" 

function MyApp() {

  const [Data, setData] = useState([])
  React.useEffect(() => {
    const userData = localStorage.getItem('Data')
    if (userData) {
      setData(JSON.parse(userData))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(Data))
  })
  function ToDoApp(e) {
    e.preventDefault()

    var todoText = document.getElementById('TodoText').value
    if(todoText === ""){
      alert("some text ")
    }

    setData((previouseVlaue) => {
      return previouseVlaue.concat(todoText)
      
    })
    // var text = document.createElement('li')
    // text.innerHTML = todoText
    // document.getElementById('ListPost').innerHTML = text
  }

  const remove = (index) => {
    let todo = [...Data]
    todo.splice(index, 1)
    setData(todo)
  };





  return (
    <div  className="todoList">
      <form onSubmit={ToDoApp} className="form">
      <h1>ToDo App</h1>
        <input type="text" id="TodoText" placeholder="Type......." /><button > Add </button>
      </form>

      {Data.map((value, index) => {

        
        return (
          <div className="flex" key={index} >
            <p className="listText">{value}</p><i className="fas fa-trash-alt button" onClick={()=> remove(index)}></i>
            
          </div>
        )
      })}

    </div>
  )
}





reactDOM.render(<MyApp />, document.getElementById('root'))