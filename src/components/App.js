import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition:{left:"0px"}
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this);
    };

    buttonClickHandler() {
        this.setState({ renderBall: true });
        // this.render()
   }

    handleKeyDown(e){
        if (e.key === 39) {
            let currentLeft = parseInt(this.state.ballPosition.left);
            let newLeft = currentLeft + 5;
            this.setState({ballPosition:{left:`${newLeft}px`}});
        }
        // if (e.key === "ArrowLeft") {
        //     let currentLeft = parseInt(this.state.ballPosition.left);
        //     let newLeft = currentLeft  -5;
        //     this.setState({ ballPosition: { left:`${newLeft}px` } });
        // }
      }

      componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
      }

    
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}   ></div>
		} else {
		    return <button onClick={this.buttonClickHandler}  className="start" >Start</button>
		}
    }

    // bind ArrowRight keydown event
    
    

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
