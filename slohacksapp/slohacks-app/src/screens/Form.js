import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

import '../styles/Form.css';

class Form extends Component {

  state = {
      childName: ''
  }

  handleChange = childName => event => {
      this.setState({
        [childName]: event.target.value,
      });
  };

trimName(name) {
  var n = name.split(" ")
  console.log(n[0])
  return n[0]
}

    render() {
      const { classes } = this.props;
        return (
            <div>
                <h1>Hi {this.trimName(this.props.name)}!</h1>
                <form className="name-input" noValidate autoComplete="off">
                    <TextField
                    id="standard-name"
                    className="name-input"
                    value={this.state.childAge}
                    onChange={this.handleChange('childAge')}
                    margin="normal"
                    />
                </form>
                <form className="name-input" noValidate autoComplete="off">
                    <TextField
                    id="standard-name"
                    className="name-input"
                    value={this.state.childAge}
                    onChange={this.handleChange('childAge')}
                    margin="normal"
                    />
                </form>
                <form className="name-input" noValidate autoComplete="off">
                    <TextField
                    id="standard-name"
                    className="name-input"
                    value={this.state.childAge}
                    onChange={this.handleChange('childAge')}
                    margin="normal"
                    />
                </form>
                <div>
                  <Button variant="outlined" color="primary">
                    M
                  </Button>
                  <Button variant="outlined" color="secondary">
                    F
                  </Button>
                  <Button variant="outlined">
                    N
                  </Button>
                </div>
                <div>
                  <Button variant="outlined">
                    1
                  </Button>
                  <Button variant="outlined">
                    2
                  </Button>
                  <Button variant="outlined">
                    3
                  </Button>
                  <Button variant="outlined">
                    4
                  </Button>
                  <Button variant="outlined">
                    5
                  </Button>
                </div>
            </div>
        );
    }
}

export default Form;
