import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core';
import { fadeInUp, fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

import '../styles/Home.css';

import tomato from '../assets/img/tomato.png';
import broccoli from '../assets/img/broccoli.png';

const styles = {
    fadeInUp: {
        animation: 'x 2s forwards',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    fadeIn: {
        animation: 'x 1s forwards',
        animationDelay: '2s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

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
                <StyleRoot>
                    <p className="open-prompt" style={styles.fadeInUp}>Nice to meet you.</p>
                    <p className="open-prompt" style={styles.fadeIn}>What's your name?</p>
                </StyleRoot>
                
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