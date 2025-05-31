import type {ToDo} from "../types/ToDo";

type ToDoItemProps = {
    toDo: ToDo;
    toggleCompleted: () => void;
}

const ToDoItem = ({toDo, toggleCompleted}: ToDoItemProps) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={toDo.completed}
                onChange={() => toggleCompleted()}
            />
            <label>{toDo.text}</label>
        </div>
    );
};

export default ToDoItem;