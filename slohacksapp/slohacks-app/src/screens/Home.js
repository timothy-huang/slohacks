import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../styles/Home.css';

import tomato from '../assets/img/tomato.png';
import broccoli from '../assets/img/broccoli.png';

class Home extends Component {
    state = {
        childName: ''
    }

    handleChange = childName => event => {
        this.setState({
          [childName]: event.target.value,
        });
    };

    render() {
        return (
            <div className="container">
                <img src={tomato} alt="Tomato" className="tomato"/>;
                <img src={broccoli} alt="Broccoli" className="broccoli"/>;
                <p className="open-prompt">Nice to meet you.</p>
                <p className="open-prompt">What's your name?</p>
                <form className="name-input" noValidate autoComplete="off">
                    <TextField
                    id="standard-name"
                    className="name-input"
                    value={this.state.childName}
                    onChange={this.handleChange('childName')}
                    margin="normal"
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