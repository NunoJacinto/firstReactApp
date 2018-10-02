import React from "react";
import ReactDOM from "react-dom";

import env from '@env'


import{
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'


//lazy loading / code spliting
import loadable from 'loadable-components'

//import Home from './home'
const Home = loadable(() => import('./home'))

//import About from './about'
const About = loadable(() => import('./about'))

//import ToDoApp from './todo-app'
const ToDoApp = loadable(() => import('./todo-app'))




const App = () =>{
    console.log('env', env);
    return (
        <div className="container">                                
            <div className="col-12">                                   
                <h1 className="text-center">I should be centered!</h1> 
            <Router>
                <div>
                    <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/about">About</Link></li>
                        <li><Link to="/todo">ToDo</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/todo" component={ToDoApp}/>
                    </Switch>
                </div>
 

            </Router>
            </div>                                                 
        </div>                                 
    )
};

export default App;