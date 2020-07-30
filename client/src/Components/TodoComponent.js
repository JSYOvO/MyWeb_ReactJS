import React from 'react';
import TodoDeleteComponent from './TodoDeleteComponent.js';

class TodoComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ul>
                    <il>{this.props.id}</il>
                    <il>{this.props.job}</il>
                    <il>{this.props.start_date}</il>
                    <il>{this.props.end_date}</il>
                    <il>{this.props.job_desc}</il>
                    <TodoDeleteComponent id = {this.props.id}></TodoDeleteComponent>
                </ul>
                
            </div>
        )
    }
}


export default TodoComponent;