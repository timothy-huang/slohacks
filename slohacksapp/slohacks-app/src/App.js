import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

class App extends Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>

        <header className="App-header">
          <p className="open-prompt">Nice to meet you.</p>
          <p className="open-prompt">What's your name?</p>
          <form className="name-input" noValidate autoComplete="off">
            <TextField
              id="standard-name"
              className="name-input"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
          </form>
          <Button variant="contained" color="primary" id="name-submit-button">
            Continue
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
