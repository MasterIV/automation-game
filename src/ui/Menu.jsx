import React from 'react';
import PropTypes from 'prop-types';
import buildings from '../config/buildings';

export default class Menu extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			selected: null,
			building: null,
			demolish: false,
		};

		this.select = this.select.bind(this);
		this.demolish = this.demolish.bind(this);
		props.buildings.setBuilding = building => this.setState({building});
	}

	select(building) {
		this.props.buildings.select(building);
		this.setState({selected: building});
	}

	demolish(state) {
		this.props.buildings.demolish = state;
		this.setState({demolish: state});
	}

	render() {
		if(this.state.building)
			return <div>
				<button onClick={() => this.demolish(false)}>cancel</button>
			</div>;

		if(this.state.selected)
			return <div>
				<span>{this.state.selected.name}</span>
				<button onClick={() => this.select(null)}>cancel</button>
				<button onClick={() => this.props.buildings.rotate++}>Rotate</button>
			</div>;

		if(this.state.building)
			return <div>
				<span>{this.state.building.def.name}</span>
				<button onClick={() => this.setState({building: null})}>cancel</button>
			</div>;

		return <div>
			<button onClick={() => this.select(buildings.dummy_replicator)}>Mining</button>
			<button onClick={() => this.select(buildings.conveyor)}>Production</button>
			<button>Logistics</button>
			<button>Resources</button>
			<button onClick={() => this.demolish(true)}>Demolish</button>
		</div>;
	}
}

Menu.propTypes = {
	buildings: PropTypes.object
};

Menu.defaultProps = {};

