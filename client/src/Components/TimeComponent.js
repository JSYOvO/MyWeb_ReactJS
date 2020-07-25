import React from 'react';

class TimeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todayDate : '',
            todayTime : ''
        }
    }
    componentWillMount(){
        this.setState({
            todayDate : new Date().toLocaleDateString([],{year:'2-digit',month:'2-digit',day:'2-digit'}),
            todayTime : new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'})
        })  
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                todayDate : new Date().toLocaleDateString([],{year:'2-digit',month:'2-digit',day:'2-digit'}),
                todayTime : new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'})
            })  
        }, 1000);
    }
    render(){
        return(
            <div>
                {this.state.todayDate} {this.state.todayTime}
            </div>
        )
    }
}

export default TimeComponent;