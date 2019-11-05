import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boardClicked1: false,
			boardClicked2: false,
			boardClicked3: false
		}
	}

	resetBoards() {
		this.setState({
			boardClicked1: false,
			boardClicked2: false,
			boardClicked3: false
		});
	}

	makeRed(e) {
		this.resetBoards();
		this.setState({
			["boardClicked" + (e.target.innerText).toString()]: true
		});
	}


	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div className={`Board-option ${this.state.boardClicked1 ? "red-board" : ''}`} onClick={this.makeRed.bind(this)}>1</div>
					<div className={`Board-option ${this.state.boardClicked2 ? "red-board" : ''}`} onClick={this.makeRed.bind(this)}>2</div>
					<div className={`Board-option ${this.state.boardClicked3 ? "red-board" : ''}`} onClick={this.makeRed.bind(this)}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;