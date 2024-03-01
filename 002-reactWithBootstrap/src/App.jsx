import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  let items_dict = [
    { task: "Buy Orange", deadline: "10-12-2023" },
    { task: "Go for meeting", deadline: "12-12-2023" },
    { task: "LinkedIn Learning", deadline: "12-12-2024"}
  ];

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <div className="container">
          <AddTodo></AddTodo>
        </div>
        <TodoItems items_dict={items_dict}></TodoItems>
      </center>
    </>
  );
}

export default App;
