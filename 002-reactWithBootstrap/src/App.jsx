import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <div className="container">
          <AddTodo></AddTodo>
        </div>
        <div className="items-container">
            <TodoItem></TodoItem>
        </div>
      </center>
    </>
  )
}

export default App;
