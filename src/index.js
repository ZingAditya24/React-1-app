import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

//Functional Component
/*
const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    );

    return (
        <div>
            Hi There !!!
        </div>
    );
};*/ 

//Class Component

class App extends React.Component{

    /*
    constructor(props){
        super(props);

        this.state = { lat: null, errMessage : "" };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude});
            },
            err => {
                this.setState({ errMessage : err.message })
            }
        );

    }*/

    state = { lat: null, errMessage: ""};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude});
            },
            err => {
                this.setState({ errMessage : err.message })
            }
        );
    }

    render(){
        
    
        if (this.state.lat && !this.state.errMessage){
            return (
                <SeasonsDisplay lat = { this.state.lat }>

                </SeasonsDisplay>
            );
        }

        if (!this.state.lat && this.state.errMessage){
            return (
                <div>
                    Error: {this.state.errMessage}
                </div>
            );
        }

        return (
            <Spinner/>
        );
        
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));