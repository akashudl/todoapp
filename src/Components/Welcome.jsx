import React, { Component } from 'react';
import  '../bootstrap.css';
import {BrowserRouter as Router,Route, Switch,Link}from 'react-router-dom';
import '../App.css';
class Welcome extends Component
{
  render()
  {
    return(
      <>
        
          <h1>Welcome</h1>
            <div className="container">
          
                   <p>Welcome To Qwikcilver  {this.props.match.params.name}.You can manage your todos <Link  to="/todo">here</Link> </p>
             
            </div>
        
        </>         
    );
  }
}
export default Welcome;
