import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core';

import '../styles/Home.css';

import tomato from '../assets/img/tomato.png';
import broccoli from '../assets/img/broccoli.png';


class Home extends Component {
    state = {
        childName: ''
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.action(this.state.childName);
        }
    }

    handleChange = childName => event => {
        this.setState({
          [childName]: event.target.value,
        });
    };

    render() {
        return (
            <div className="container" onKeyPress={this._handleKeyPress}>
                <img src={tomato} alt="Tomato" className="tomato"/>;
                <img src={broccoli} alt="Broccoli" className="broccoli"/>;
                <p className="open-prompt">Nice to meet you.</p>
                <p className="open-prompt">What's your name?</p>
                <form className="name-input" noValidate autoComplete="off">
                    <Input
                        className="textfield"
                        value={this.state.childName}
                        onChange={this.handleChange('childName')}
                        style={{ width: '70%', textAlign: 'center' }}
                    />
                </form>
                <Button variant="contained" color="primary" id="name-submit-button" onClick={() => this.props.action(this.state.childName)}>
                    Continue
                </Button>
            </div>
        );
    }
}

export default Home;