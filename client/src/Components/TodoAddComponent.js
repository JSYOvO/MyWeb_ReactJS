import React from 'react';
import {post} from 'axios';
const tag = "[TodoAddComponent]";

class TodoAddComponent extends React.Component {
    constructor(props){
        super(props);
        console.log(tag);
        this.state = {
            job : '',
            startDate : '',
            endDate : '',
            desc : ''
        }
    }
    addTodoList = () => {
        const url = '/api/todolists';
        const formData = new FormData();
        formData.append('job', this.state.job);
        formData.append('startDate', this.state.startDate);
        formData.append('endDate', this.state.endDate);
        formData.append('desc', this.state.desc);
        console.log(tag, "addTodoList()");

        const config = {
            // headers : {'content-type' : 'multipart/form-data'}
            headers : {'content-type' : 'application/x-www-form-urlencoded'}
        }
        return post(url, formData, config);
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(tag,'handleFormSubmit');

        this.addTodoList()
            .then((response) => {
                console.log('response : ' + response.data)
            })


        if(this.state.job !== '' && this.state.startDate !== '' && this.state.endDate !== '' && this.state.desc !== ''){
        
        }
        //window.location.reload();

    }
    handleValueChange = (e) => {
        console.log(tag,'handleValueChange');
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }
    render(){
        return(
            <form>
                <p>JOB : <input type = "text" placeholder="할일" name = "job" autoFocus onChange={this.handleValueChange}></input></p>
                <p>START_DATE : <input type = "date" name = "startDate" onChange={this.handleValueChange}></input></p>
                <p>END_DATE : <input type = "date" name = "endDate" onChange={this.handleValueChange}></input></p>
                <p>DESC : <input type = "text"  name = "desc" onChange={this.handleValueChange}></input></p>
                
                
                <input type = "submit" value = "Add"  onClick = {this.handleFormSubmit}></input>
            </form>
        )
    }
} 

export default TodoAddComponent;