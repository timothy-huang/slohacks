import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Route , withRouter} from 'react-router-dom';

import '../styles/Home.css';

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