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
      Vegetarian: false,
      Vegan: false,
      NutFree: false,
      GlutenFree: false,
      DairyFree: false,
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

    render() {
      const { classes } = this.props;
      const { Vegetarian, Vegan, NutFree, GlutenFree, DairyFree } = this.state;
        return (
            <div>
                <h1>Hi {this.trimName(this.props.name)}!</h1>
                <InputBox question="How old are you?" description="this is for your own good"/>
                <InputBox question="How tall are you?" description="i mean that"/>
                <InputBox question="How much do you weigh?" description="you can trust us with your info"/>

                <div>
                  Male, Female, Non-Binary?
                </div>

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
                  What is your activity level?
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
            </div>
        );
    }
}

export default Form;
