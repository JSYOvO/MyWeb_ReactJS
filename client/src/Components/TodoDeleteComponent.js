import React from 'react';
import {post} from 'axios';
const tag = "[TodoDeleteComponent]";

class TodoDeleteComponent  extends React.Component {
    constructor(props){
        super(props);

    }
    deleteTodoList = () => {
        const url = '/api/todolistsDelete';
        const formData = new FormData();
        formData.append('deleteId', this.props.id);
      
        const config = {
            headers : {'content-type' : 'application/json'}
            // headers : {'content-type' : 'application/x-www-form-urlencoded'},
        }
        return post(url, formData, config);
    }
    handleDeleteButtonClick = () => {
        this.deleteTodoList()
            .then((response) => {
                console.log('response : ' + response.data)
            })
        window.location.reload();
    }
    render(){
        return(
            
                <button onClick = {this.handleDeleteButtonClick}>x</button>
            
        )
    }
}

export default TodoDeleteComponent;