import React, { Component } from 'react';
import bellA from "./bella.png";
import bellB from "./bellb.png";

class NewComp extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            message: "Need to use ReactJS States?",
            sub: "Subscribe",
            imgURL: bellA
        };
    }
    
    styles = {
        fontStyle: "italic",
        color: "purple"
      };

Buttonchange=()=>{
    this.setState({
        message: "Use the bell icon to never miss an update.",
        sub: "Subscribed"
    });
};

imageChange=()=>{
    this.setState({
        imgURL: bellB,
        message: "Alerts enabled!"
    });
};

    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
            <p/>
            <img 
            style={{ width: "30px", height: "30px" }}
            src={this.state.imgURL} 
            alt=""
            onClick={this.imageChange}
            />
            </div>
        );
    }
}

export default NewComp;