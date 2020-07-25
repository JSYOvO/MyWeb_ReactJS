import React from 'react';

class TodoAddComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <form>
                <input type = "text" placeholder="할일을 입력하세요" autoFocus></input>
            </form>
        )
    }
} 

export default TodoAddComponent;