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
  }

    handleInput = childInput => event => {
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
        textField = <div className="description">{this.props.description}</div>
      } else {
        textField = <TextField
        id="standard-name"
        className="name-input"
        value={this.state.childInput}
        onChange={this.handleInput('childInput')}
        margin="normal"
        style ={{width: '90%'}}
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
