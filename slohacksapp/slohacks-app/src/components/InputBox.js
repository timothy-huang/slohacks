import React, { Component } from 'react';
<<<<<<< HEAD
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Route , withRouter} from 'react-router-dom';

import '../styles/Home.css';

class InputBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
        expanded: false,
        childInput: ''
    }
  }



    handleInput = childInput => event => {
=======

class InputBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            childInput: '',
            expanded: false
        }
    }

    
    
    handleChange = childInput => event => {
>>>>>>> 9ed7556cf4bf774f7299a0e7dd3e77d10eff8c37
        this.setState({
          [childInput]: event.target.value,
        });
    };

<<<<<<< HEAD
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
        />
      }
        return (
          <div>
            <div>
              {this.props.question}
              <button onClick={this.handleExpanded()}>click to toggle</button>
            </div>
            <div>
              {textField}
            </div>
          </div>
=======
    render() {
        return (
            <div>
                <h2>MacronutrientDetails</h2>
                <div>{this.props.question}</div>
            </div>
>>>>>>> 9ed7556cf4bf774f7299a0e7dd3e77d10eff8c37
        );
    }
}

<<<<<<< HEAD
export default InputBox;
=======
export default InputBox
>>>>>>> 9ed7556cf4bf774f7299a0e7dd3e77d10eff8c37
