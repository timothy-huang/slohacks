import React, { Component } from 'react';

class RadioButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            childInput: '',
            expanded: false
        }
    }
    
    handleChange = childInput => event => {
        this.setState({
          [childInput]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <h2>MacronutrientDetails</h2>
                <div>{this.props.question}</div>
            </div>
        );
    }
}

export default RadioButton;