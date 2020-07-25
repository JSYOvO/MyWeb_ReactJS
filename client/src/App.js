import React, { Component } from 'react';
import TimeComponent from './Components/TimeComponent.js'
import TodoComponent from './Components/TodoComponent.js'
import TodoAddComponent from './Components/TodoAddComponent.js'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todoList : [],
    tmp : "test"
  }
  componentDidMount(){
    this.callApi()
      .then(res => this.setState({todoList : res}))
      .catch(err => console.log(err))
  }
  callApi = async() => {
    const response = await fetch('/api/todolists');
    const body = await response.json();
    return body;
  }

  render(){
    return(
      <div>
        JSYOvO BLOG
        <TimeComponent/>
        ToDo Lists
        {this.state.todoList.map((c) => {
          return (
            <TodoComponent 
              id = {c.ID} 
              job = {c.JOB} 
              start_date = {c.START_DATE}
              end_date =  {c.END_DATE} 
              job_desc = {c.JOB_DESC}
            />
          )
        })}
        <TodoAddComponent/>
      </div>  
    )
  }
}

export default App;
