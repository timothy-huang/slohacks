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

    this.state = {
      name: 'friend',
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

  nameHandler(input) {
    if (input != '') {
      this.setState({
        name: input
      });
    }
    this.props.history.push('/Form'); 
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
          render={(props) => <Home {...props} action={this.nameHandler} />}
        />
        <Route 
          path="/Form" 
          render={() => <Form name={this.state.name} />}
        />
        <Route path="/Recommendation" component={Recommendation} />
        <Route path="/MacronutrientDetails" component={MacronutrientDetails} />
      </div>
    );
  }
}

export default withRouter(App);
