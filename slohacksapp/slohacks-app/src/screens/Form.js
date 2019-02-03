import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import InputBox from '../components/InputBox'
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import '../styles/Form.css';

class Form extends Component {

  state = {
<<<<<<< HEAD
      childName: ''
=======
      childAge: '',
      Vegetarian: false,
      Vegan: false,
      NutFree: false,
      GlutenFree: false,
      DairyFree: false
>>>>>>> d57372525e999680e4d05459db77ba00002c85fc
  }

  handleChange = childName => event => {
      this.setState({
        [childName]: event.target.value,
      });
  };

  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

trimName(name) {
  var n = name.split(" ")
  console.log(n[0])
  return n[0]
}

transition() {
  var element = document.querySelector('InputBox')
  console.log(element)
}

log() {
  console.log('fired')
}

    render() {
      const { classes } = this.props;
      const { Vegetarian, Vegan, NutFree, GlutenFree, DairyFree } = this.state;
        return (
            <div id="wrapper">
                <div id="container">
                  <h1 style={{color: '#304503'}}>Hi {this.trimName(this.props.name)}!</h1>
                  <InputBox question="How old are you?" description="Age allows to estimate your body’s growth. A 12 year old child would have a different body composition from 40 year old adult."/>
                  <InputBox question="How tall are you?" description="Height and weight allows us to estimate your body composition. "/>
                  <InputBox question="How much do you weigh?" description="Height and weight allows us to estimate your body composition.  "/>
                  <InputBox question="Male, Female, Non-Binary?" description="Male and female bodies have different nutritional requirements."/>

                  <div id="gender-btns">
                    <Button variant="outlined" color="primary" id="gender-btn" active>
                      M
                    </Button>
                    <Button variant="outlined" color="secondary" id="gender-btn">
                      F
                    </Button>
                    <Button variant="outlined" id="gender-btn">
                      N
                    </Button>
                  </div>

                  <InputBox question="What is your activity level?" description="The users activity level will allow us to create the best personalized plan for you. 1. No activity level 2. Light activity level (light walking) 3. Average (fitness of any kind at least 3x a week) 4. Very Active (fitness at least 5x a week and active lifestyle) 5. Athlete"/>

                  <div id="gender-btns">
                    <Button variant="outlined" id="gender-btn" >
                      1
                    </Button>
                    <Button variant="outlined" id="gender-btn">
                      2
                    </Button>
                    <Button variant="outlined" id="gender-btn">
                      3
                    </Button>
                    <Button variant="outlined" id="gender-btn">
                      4
                    </Button>
                    <Button variant="outlined" id="gender-btn">
                      5
                    </Button>
                  </div>

                  <div>
                    Any dietary restrictions?
                  </div>

                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox checked={Vegetarian} onChange={this.handleCheck('Vegetarian')} value="Vegetarian" />
                          }
                          label="Vegeterian"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox checked={Vegan} onChange={this.handleCheck('Vegan')} value="Vegan" />
                          }
                          label="Vegan"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={NutFree}
                              onChange={this.handleCheck('NutFree')}
                              value="Nut Free"
                            />
                          }
                          label="Nut Free"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox checked={GlutenFree} onChange={this.handleCheck('GlutenFree')} value="Gluten Free" />
                          }
                          label="Gluten Free"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox checked={DairyFree} onChange={this.handleCheck('DairyFree')} value="Dairy Free" />
                          }
                          label="Dairy Free"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                  <Button variant="contained" color="primary" id="name-submit-button" onClick={() => this.props.action(this.state.childName)}>
                      Continue
                  </Button>
                </div>
            </div>
        );
    }
}

export default Form;
