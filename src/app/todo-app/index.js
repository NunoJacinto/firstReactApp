import ToDoApp from './todo-app.component';
import TodoAppContainer from './todo-app.container';
import {compose} from 'redux';
export default TodoAppContainer(ToDoApp);

/*
export default compose{
    TodoAppContainer
}(ToDoApp);

*/