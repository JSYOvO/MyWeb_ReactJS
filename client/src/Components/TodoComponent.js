import React from 'react';

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
                </ul>
                
            </div>
        )
    }
}


export default TodoComponent;