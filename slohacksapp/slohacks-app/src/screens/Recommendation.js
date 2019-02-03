import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Slider from '@material-ui/lab/Slider';
import '../styles/Recommendation.css'
import Button from '@material-ui/core/Button';

class Recommendation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalWeight: 0, 
            weightPerWeek: 1,
            expectedDate: new Date(),
            displayDate: this.dateProcessing(new Date()),
            gainLose: "gain",

            // age: this.props.list['age'],
            // gender: this.props.list['gender'],
            // heightft: this.props.list['heightft'],
            // heightin: this.props.list['heightin'],
            // weight: this.props.list['weight'],
            // activityLevel: this.props.list['activityLevel'],
            // target:this.props.list["target"],
            expectedCalorie: this.computeCalories(),
            recommendedCalorie: this.computeCalories()
        };
    }

    dateProcessing = (date) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

        return monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()

    }

    weekProcessing = () => {
        if (this.state.totalWeight < 0) {
            this.setState({gainLose: "lose"})
        } else {
            this.setState({gainLose: "gain"})
        }

        let numDays;

        if (this.state.weightPerWeek !== 0) {
            numDays = Math.round(Math.abs(this.state.totalWeight) / this.state.weightPerWeek * 7);
            this.state.expectedDate.setDate(this.state.expectedDate.getDate() + numDays);
        } 
            
        this.setState({displayDate: this.dateProcessing(this.state.expectedDate)});
        this.setState({expectedDate: new Date()});
    }

    computeCalories() {
        let age = parseInt(this.props.list['age']);
        let heightft = parseFloat(this.props.list['heightft']);
        let heightin = parseFloat(this.props.list['heightin']);
        let weight = parseFloat(this.props.list['weight']);
        let activityLevel = parseInt(this.props.list['activityLevel']);
        let gender = this.props.list['weight'];

        let s;

        if (gender === 'M') {
            s = 5;
        } else {
            s = -161;
        }

        let brm = 10 * (weight / 2.205) + 6.25 * 2.54 * (heightft * 12 + heightin) - 5 * age + s;

        let activityCoeff;

        switch (activityLevel) {
            case 1:
            activityCoeff = 1.2;
            break;
            case 2:
            activityCoeff = 1.375;
            break;
            case 3:
            activityCoeff = 1.55;
            break;
            case 4:
            activityCoeff = 1.725;
            break;
            case 5: 
            activityCoeff = 1.9;
            break;
        }

        let plusMinusFlag;
        let tempWeightPerWeek;

        if (typeof this.state !== "undefined") {
        if (this.state.gainLose === "loss") {
            plusMinusFlag = -1;
        } else {
            plusMinusFlag = 1
        }
        tempWeightPerWeek = this.state.weightPerWeek;
    } else {
        tempWeightPerWeek = 0
    }

        return brm * activityCoeff + plusMinusFlag * tempWeightPerWeek * 500;
    }

    handleChangeTotalWeight = (event, value) => {
        this.setState({totalWeight: value})
        this.weekProcessing()
    }

    handleChangeWeightPerWeek = (event, value) => {
        this.setState({weightPerWeek: Math.round(value*10) / 10}) 
        this.weekProcessing()
    }

    render() {
        return (
            <div id="recommendationWrapper">
                <div id="main">
                    <p className="Text question"> How much weight do you want to gain or lose in total? {this.props.list['weight']}</p>
                    <div class="slider">
                    <p className="Text sliderText">{this.state.totalWeight} lbs</p>
                    <Slider
                            value={this.state.totalWeight}
                            aria-labelledby="label"
                            onChange={this.handleChangeTotalWeight}
                            min={-20}
                            max={20}
                            step={1}
                            />
                    <div className="sliderLabels">
                    <p className="Text">-20 lbs</p><p>20 lbs</p></div>
                    </div>
                    
                    <p className="Text question">How much weight do you want to gain or lose per week?</p>
                    <div class="slider">
                    <p className="Text sliderText">{this.state.weightPerWeek} lbs</p>
                    <Slider
                            value={this.state.weightPerWeek}
                            aria-labelledby="label"
                            onChange={this.handleChangeWeightPerWeek}
                            min={0}
                            max={2}
                            step={0.1}
                            />
                    <div className="sliderLabels">
                    <p>0 lbs</p><p>2 lbs</p></div>
                    </div>

                    <div id="background">You will {this.state.gainLose} {Math.abs(this.state.totalWeight)} lbs by {this.state.displayDate}.</div>
                    <Button variant="contained" color="primary" id="name-submit-button" onClick={() => this.props.action(this.state.childName)}>
                    Calculate Nutrition Plan
                    </Button>
                </div>
            </div>
        );
    }
}

export default Recommendation;
