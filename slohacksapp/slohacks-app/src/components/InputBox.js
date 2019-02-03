import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Route , withRouter} from 'react-router-dom';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'

import '../styles/InputBox.css';

class InputBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
        expanded: false,
        childInput: ''
    }
<<<<<<< HEAD
    
    handleChange = childInput => event => {
=======
  }

    handleInput = childInput => event => {
>>>>>>> 4c94fd9273285455aae00158a4923715616ba1a5
        this.setState({
          [childInput]: event.target.value,
        });
    };

    handleExpanded = expanded => event => {
      this.setState(prevState => ({
        expanded: !prevState.expanded
      }));
    }


    render() {
      let textField;

      if(this.state.expanded) {
        textField = <h2>{this.props.description}</h2>
      } else {
        textField = <TextField
        id="standard-name"
        className="name-input"
        value={this.state.childInput}
        onChange={this.handleInput('childInput')}
        margin="normal"
        style ={{width: '30%'}}
        />
      }
        return (
          <div>
            <div className="row">
              {this.props.question}
              <KeyboardArrowDown style={{color: 'black'}} onClick={this.handleExpanded()}/>
            </div>
            <div>
              {textField}
            </div>
          </div>
        );
    }
}

export default InputBox;
