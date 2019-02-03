import React, { Component } from 'react';

class Recommendation extends Component {
    
    render() {
        return (
            <div>
                <h2>Recommendation</h2>
                <h2>Weight is {this.props.list.weight}</h2>
            </div>  
        );
    }
}

export default Recommendation;
