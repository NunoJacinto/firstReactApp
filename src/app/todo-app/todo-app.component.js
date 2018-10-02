/*import React from "react";

const ToDoApp = () => (
    <h1>TodoApp works!</h1>
);

export default ToDoApp;*/

import React  from "react";
import { Route } from 'react-router-dom'

import TodoList from './shared/todo-list';
import TodoAdder from './shared/todo-adder';
import TodoView from './todo-view';


const TodoApp = () => (
    <div>
        <h1>TodoApp works!</h1>
        <div className="row">
            <div className="col-6">
                <TodoAdder />
            </div>
            <div className="col-6">
                <TodoList />
            </div>
        </div>
        <Route path="/todo/:id" component={TodoView} />
    </div>

);

export default TodoApp;