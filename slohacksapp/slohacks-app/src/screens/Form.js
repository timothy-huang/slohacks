import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Form extends Component {

    redirectToTarget = () => {
        this.props.history.push(`/Home`)
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Form;