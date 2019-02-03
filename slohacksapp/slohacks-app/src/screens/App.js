import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import Home from './Home.js'
import Form from './Form.js';
import Recommendation from './Recommendation.js';
import MacronutrientDetails from '../components/MacronutrientDetails.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.nameHandler = this.nameHandler.bind(this);
    this.processForm = this.processForm.bind(this);

    this.state = {
      name: 'Friend',
      age: '',
      gender: '',
      heightft: '',
      heightin: '',
      weight: '',
      activityLevel: '',
      foodFrequency: '',
      target: '',
      vegetarian: false,
      vegan: false,
      nut: false,
      gluten: false,
      dairy: false,
      calories: '',
      protein: '',
      carbohydrates: '',
      fat: ''
    };
  }

  processForm(input) {
    this.setState({
      age: input.childAge,
      gender: input.childGender,
      weight: input.childWeight,
      activityLevel: input.childActivityLevel,
      vegetarian: input.Vegetarian,
      vegan: input.Vegan,
      nut: input.NutFree,
      gluten: input.GlutenFree,
      dairy: input.DairyFree
    });

    this.props.history.push('/Recommendation')
  }

  nameHandler(input) {
    if (input != '') {
      this.setState({
        name: input
      });
    }
    this.props.history.push('/Form');
    console.log(this.state)
  }

  render() {

    return (
      <div>
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Form">Form</Link></li>
            <li><Link to="/Recommendation">Recommendation</Link></li>
            <li><Link to="/MacronutrientDetails">MacronutrientDetails</Link></li>
        </ul> */}

        <Route
          exact path="/"
          render={() => <Home action={this.nameHandler} />}
        />
        <Route
          path="/Form"
          render={() => <Form name={this.state.name} processForm={this.processForm}/>}
        />
        <Route
          path="/Recommendation"
          render={() => <Recommendation list={this.state} />}
        />
        <Route path="/MacronutrientDetails" component={MacronutrientDetails} />
      </div>
    );
  }
}

export default withRouter(App);
