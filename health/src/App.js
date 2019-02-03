
import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class App extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled'
  };

  showAlert(name) {
    alert(name)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
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
          <Button type="submit" variant="contained" color="primary" id="name-submit-button" onClick={() => this.showAlert(this.state.name)}>
            Continue
          </Button>
        </header>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
