import { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import uuid from 'react-uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

const ToDoForm = () => {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id){
        const newTodos = [...todos] // creating a copy to modify; never directly modify a state variable?
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddToDo(e) {
        const name = todoNameRef.current.value;
        if (name === "") return; // no adding empty todos
        setTodos(prevTodos => {
            return [...prevTodos, { // three dots: https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing
                id: uuid(),
                name: name,
                complete: false
            }]
        })
        todoNameRef.current.value = null; // cleaning up text box for new input after clicking button
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete);
        setTodos(newTodos);
    }

    return (  // todos=() is a prop
        <>
            <h3>Your ToDo List</h3>
            <ToDoList todos={todos} toggleTodo={toggleTodo} />
            <form className="tdlist">
                <input ref={todoNameRef} type="text"/>
                <button onClick={handleAddToDo}>Add</button>
                <button onClick={handleClearTodos}>Clear completed</button>
                <div>{todos.filter(todo => !todo.complete).length} left</div>
            </form>
        </>
    );
}
 
export default ToDoForm;