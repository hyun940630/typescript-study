import React, { useState } from 'react';
import { TodoList } from 'components/TodoList';
import { AddTodoForm } from 'components/AddTodoForm';
import { TodoWrapper } from 'components/Atoms';

const initialTodos: Array<Todo> = [
    { text: 'Walk the dog', complete: true },
    { text: 'write App', complete: false },
];

const Todo = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const addTodo: AddTodo = (newTodo) => {
        newTodo.trim() !== '' &&
            setTodos([...todos, { text: newTodo, complete: false }]);
    };
    return (
        <TodoWrapper>
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </TodoWrapper>
    );
};

export default Todo;
