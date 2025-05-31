import "./App.css";
import ToDoItem from "./components/ToDoItem.tsx";

function App() {
  return (
    <>
      <ToDoItem toDo={{text:"To do item text"}} toggleCompleted={() => {}}/>
    </>
  );
}

export default App;
