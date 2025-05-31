import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import ToDoItem from "./ToDoItem";

test("todo text renders correctly", () => {
    render(<ToDoItem toDo={{text: "Test text"}} toggleCompleted={() => {}}/>);

    const textLabel: HTMLElement = screen.getByText(/Test text/);
    expect(textLabel).toBeInTheDocument();
});

test("completed box renders correctly", () => {
    render(<ToDoItem toDo={{text: "", completed: true}} toggleCompleted={() => {}}/>);

    const checkBox: HTMLElement = screen.getByRole("checkbox");
    expect(checkBox).toBeInTheDocument();
});

test("completed is false by default", () => {
    render(<ToDoItem toDo={{text:""}} toggleCompleted={() => {}}/>);

    const checkBox: HTMLElement = screen.getByRole("checkbox");
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).not.toBeChecked();
});

test("completed is false", () => {
    render(<ToDoItem toDo={{ text: "",completed: false }} toggleCompleted={() => {}}/>);

    const checkBox: HTMLElement = screen.getByRole("checkbox");
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).not.toBeChecked();
});

test("completed is true", () => {
    render(<ToDoItem toDo={{text: "", completed: true}} toggleCompleted={() => {}}/>);

    const checkBox: HTMLElement = screen.getByRole("checkbox");
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).toBeChecked();
});

test("calls onSquareClick when checked", () => {
    const toggleComplete = jest.fn();

    render(<ToDoItem toDo={{ text: "", completed: true}} toggleCompleted={toggleComplete}/>);

    const checkBox: HTMLElement = screen.getByRole("checkbox");
    fireEvent.click(checkBox);

    expect(toggleComplete).toHaveBeenCalledTimes(1);
});