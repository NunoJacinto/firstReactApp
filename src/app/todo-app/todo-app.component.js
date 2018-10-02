/*import React from "react";

const ToDoApp = () => (
    <h1>TodoApp works!</h1>
);

export default ToDoApp;*/

import React, { Component } from "react";

import TodoList from './todo-list';
import TodoAdder from './todo-adder';


const TodoApp = () => (
<div>
                <h1>TodoApp works!</h1>

                <TodoAdder/>

                <TodoList/>

            </div>
);
    
export default TodoApp;