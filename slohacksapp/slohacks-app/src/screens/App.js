import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import Home from './Home.js'
import Form from './Form.js';
import Recommendation from './Recommendation.js';
import Results from './Results.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.nameHandler = this.nameHandler.bind(this);
    this.processForm = this.processForm.bind(this);
    this.recommendHandler = this.recommendHandler.bind(this);

    this.state = {
      name: 'Friend',
      age: '17',
      gender: 'M',
      height: "5' 11''",
      weight: '175',
      activityLevel: '1',
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
      fat: '',
      finalCalories: '',
      weightPerWeek: ''
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
      dairy: input.DairyFree,
      height: input.childHeight
    });

    this.props.history.push('/Recommendation')
  }

  nameHandler(input) {
    if (input !== '') {
      this.setState({
        name: input
      });
    }
    this.props.history.push('/Form');
  }

  recommendHandler(a, b, c) {
    this.setState({
      finalCalories: a,
      activityLevel: b,
      weightPerWeek: c
    });

    let protPerc = 0;


    switch (this.state.activityLevel) {
      case '1':
      protPerc = 0.4;
      break;
      case '2':
      protPerc = 0.75;
      break;
      case 3:
      protPerc = 0.9;
      break;
      case 4:
      protPerc = 0.9;
      break;
      case 5:
      protPerc = 1.0
      break;
    };

      this.setState({protein: protPerc * this.state.weight, fat: 0.25 * parseFloat(a) / 9.0});
      this.setState({carbohydrates: (a - protPerc * this.state.weight * 4 - 0.25 * parseFloat(a)) / 4.0});

    this.props.history.push('/Results');
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
          render={() => <Recommendation list={this.state} process={this.recommendHandler}/>}
        />
        <Route path="/Results"
        render={() => <Results list={this.state}/>}/>
      </div>
    );
  }
}

export default withRouter(App);
