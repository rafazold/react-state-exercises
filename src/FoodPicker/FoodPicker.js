import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			restaurant: 'Frangelico',
			meal: '',
			desert: ''
		}
	}

	getInput(e) {
		if(e.target.type === "checkbox"){
			this.setState({
				[e.target.name]: e.target.checked,
			});
		} else {
			this.setState({
				[e.target.name]: e.target.value,
			});
		}
	}

	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input type="text" name="name" onInput={this.getInput.bind(this)} />
				</div>
				<div>
					Choose restaurant:
					<select name="restaurant" onChange={this.getInput.bind(this)}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text" name="meal" onInput={this.getInput.bind(this)}/>
				</div>
				<div>
					Want a desert?
					<input type="checkbox" name="desert" onChange={this.getInput.bind(this)}/>
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi [{this.state.name}]! <br />
					We are glad you want to reserve a table at [{this.state.restaurant}].<br />
					We will make sure that your favorite meal, [{this.state.meal}] is available.<br />
					Additionally, our chef will make a special desert for you!<br />
					{this.state.desert ? "Thank you for the desert" : "No desert today..."}
				</div>
			</div>
		);
	}
}

export default FoodPicker;