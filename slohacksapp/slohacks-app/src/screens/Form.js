import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InputBox from '../components/InputBox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { fadeInUp, fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

import '../styles/Form.css';
import kiwi from '../assets/img/kiwi.png';
import mango from '../assets/img/mango.png';
import pomegranate from '../assets/img/pomegranate.png';
import coconut from '../assets/img/coconut.png';

const styles = {
  fadeInUp: {
    animation: 'x 1.5s forwards',
    animationDelay: '.7s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  },
  fadeIn: {
    animation: 'x 1.5s forwards',
    animationDelay: '2.3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

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

    _handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          console.log("pressed enter")
          this.props.action(this.state.childName);
      }
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
            <StyleRoot id="wrapper" onKeyPress={this._handleKeyPress}>
                <img src={kiwi} alt="Kiwi" className="kiwi"/>
                <img src={mango} alt="Mango" className="mango"/>
                <img src={pomegranate} alt="Pomegranate" className="pomegranate"/> 
                <img src={coconut} alt="Coconut" className="coconut"/> 
                <div id="container">
                  <div className="greeting" style={styles.fadeInUp}>Hi, {this.trimName(this.props.name)}!</div>
                  <div className="formContainer" style={styles.fadeIn}>
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

                    <div style ={{ marginTop: 32 }}>
                      Any dietary restrictions?
                    </div>

                    <div>
                      <FormControl component="fieldset">
                        <FormGroup row="true">
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
                    <Button variant="contained" color="primary" id="name-submit-button" onClick={() => this.props.processForm(this.state)}>
                        Continue
                    </Button>
                  </div>
                </div>
            </StyleRoot>
        );
    }
}

export default Form;
