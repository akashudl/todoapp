import React, { Component } from 'react';
import "./Todo.css";

class TodoComponents extends Component
{  constructor(props)
    {
        super(props)
        this.state={
            todo:[
                {id:1,description:'Learn React',done:true,targetdate: new Date().toLocaleDateString()},
                {id:2,description:'Learn NodeJs',done:false,targetdate: new Date().toLocaleDateString()},
                {id:3,description:'Become Full StackDeveloper',done:false,targetdate:new Date().toLocaleDateString()}
            ] 
        }
    }
    render()
    {
        return(
           <div className="Todoa">
            <h1>ToDo List</h1>
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Is Completed</th>
                        <th>Targetdate</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.todo.map(
                        todo=>  <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetdate.toString()}</td>
                    </tr>

                    )
                  
                    }
                </tbody>

            </table>
            </div>
           </div>
        );
    }
}
export default TodoComponents;