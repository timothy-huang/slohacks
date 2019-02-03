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
      childAge: '',
      childHeight: '',
      childWeight: '',
      childGender: '',
      childActivityLevel: '',
      Vegetarian: false,
      Vegan: false,
      NutFree: false,
      GlutenFree: false,
      DairyFree: false
  }

  handleChange = childName => event => {
      this.setState({
        [childName]: event.target.value,
      });
  };

  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeAge = e => this.setState({childAge: e.target.value});

  handleChangeHeight = e => this.setState({childHeight: e.target.value});

  handleChangeWeight = e => this.setState({childWeight: e.target.value});

  handleChangeGender = e => this.setState({childGender: e.target.value});

  handleChangeActivityLevel = e => this.setState({childActivityLevel: e.target.value});

  trimName(name) {
    var n = name.split(" ")
    console.log(n[0])
    return n[0]
  }

    render() {
      const { classes } = this.props;
      const { Vegetarian, Vegan, NutFree, GlutenFree, DairyFree } = this.state;
        return (
            <div id="wrapper">
                <div id="container">
                  <div className="greeting">Hi {this.trimName(this.props.name)}!</div>
                  <InputBox question="How old are you?" description="Age allows to estimate your body’s growth. A 12 year old child would have a different body composition from 40 year old adult." value={this.state.childAge} onChangeValue={this.handleChangeAge}/>
                  <InputBox question="How tall are you? (5 ft 3 in = 5' 3&quot;)" description="Height and weight allows us to estimate your body composition. " value={this.state.childHeight} onChangeValue={this.handleChangeHeight}/>
                  <InputBox question="How much do you weigh? (lbs)" description="Height and weight allows us to estimate your body composition.  " value={this.state.childWeight} onChangeValue={this.handleChangeWeight}/>
                  <InputBox question="Male, Female, Non-Binary?" description="Male and female bodies have different nutritional requirements." value={this.state.childGender} onChangeValue={this.handleChangeGender}/>

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

                  <InputBox question="What is your activity level?" description="The users activity level will allow us to create the best personalized plan for you. 1. No activity level 2. Light activity level (light walking) 3. Average (fitness of any kind at least 3x a week) 4. Very Active (fitness at least 5x a week and active lifestyle) 5. Athlete" value={this.state.childActivityLevel} onChangeValue={this.handleChangeActivityLevel}/>

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

                  <div style={{marginTop: 24}}>
                    Any dietary restrictions?
                  </div>

                  <div>
                    <FormControl component="fieldset">
                      <FormGroup row='true'>
                        <FormControlLabel
                          control={
                            <Checkbox checked={Vegetarian} onChange={this.handleCheck('Vegetarian')} value="Vegetarian" />
                          }
                          label="Vegeterian"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox checked={Vegan} onChange={this.handleCheck('Vegan')} value="Vegan"/>
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
                  <Button variant="contained" color="primary"     id="name-submit-button" onClick={() => this.props.processForm(this.state)}>
                      Continue
                  </Button>
                </div>
            </div>
        );
    }
}

export default Form;
