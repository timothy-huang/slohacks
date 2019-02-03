import React, { Component } from 'react';
import { Divider } from 'material-ui';
import '../styles/Recommendation.css'
import PieChart from 'react-minimal-pie-chart';

class Results extends Component {

    state = {
        protein: 0,
        fat: 0,
        carbs: 0
    }
    render() {
        console.log(this.props.list)
        return (
            <div id="recommendationWrapper">
            <div id="main">
            <p class = "Text question"> Your recommended daily calorie intake is <div id="bold-large">{Math.round(this.props.list['finalCalories'])} Calories.</div></p>

            <p className="Text question">Here is your recommended macro-nutrient breakdown:</p>
            <br></br>

            <PieChart id="chart"
                data={[
                { title: 'Fat', value: this.props.list['fat'], color: '#304503' },
                { title: 'Protein', value: this.props.list['protein'], color: '#D8E568' },
                { title: 'Carbohydrates', value: this.props.list['carbohydrates'], color: '#9AAF6E' },
                ]}/>

            <div className="info-container">
            <div className="sub-container"><div className="subsubcontainer"><div className="color-container" id="protein"></div><p className="Text small">{Math.round(this.props.list['protein'])} grams</p><p className="Text small">protein</p></div>
            <p>Ingredients to try:</p>

            <div>
            {this.props.list['vegtarian'] ? (
                <ul><li>Soybeans 1 serving, 68g</li><li>Seaweed 1 serving, 64g</li><li>Mungo beans 1 serving, 52g</li></ul>
            ) : (
                <ul><li>Soybeans 1 serving, 68g</li><li>Seaweed 1 serving, 64g</li><li>Chicken broilers, 47g</li></ul>
            )
            
            }
            </div>
            </div>
            <div className="sub-container"><div className="subsubcontainer"> <div className="color-container" id="fat"></div><p className="Text small">{Math.round(this.props.list['fat'])} grams</p><p className="Text small">fat</p></div>
            <p>Ingredients to try:</p>
            <div>
            {this.props.list['vegtarian'] ? (
                <ul><li>Avocados 1 serving, 23g </li><li>Cheddar cheese slice, 10g</li><li>Edamame 1 cup, 5g</li></ul>
            ) : (
                <ul><li>Avocados 1 serving, 23g </li><li>Cheddar cheese slice, 10g</li><li>Almonds (14 count), 6g</li></ul>
            )
            
            }
            </div>
            </div>


            <div className="sub-container"><div className="subsubcontainer"><div className="color-container" id="carbs"></div><p className="Text small">{Math.round(this.props.list['carbohydrates'])} grams</p><p className="Text small">carbs</p></div>
            <p>Ingredients to try:</p>
            <div>
            {this.props.list['vegtarian'] ? (
                <ul><li>Buckwheat 1 serving, 155g</li><li>1 cup peach nectar, 149.5g</li><li>Pumpkin pie mix, 145.7g</li></ul>
            ) : (
                <ul><li>Buckwheat 1 serving, 155g</li><li>1 cup peach nectar, 149.5g</li><li>Dry, whole milk, 120.8g</li></ul>
            )
            
            }
            </div></div>
            </div>      
            </div>
            </div>
        )
    }

}

export default Results;