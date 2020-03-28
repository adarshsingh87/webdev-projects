import React, { Component } from 'react';
import CardList from './components/CardList';
import { robots } from './components/robots';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		};
	}
	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name
				.toLocaleLowerCase()
				.includes(this.state.searchfield.toLocaleLowerCase());
		});
		return (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}
export default App;
