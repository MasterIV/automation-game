import React from 'react';
import PropTypes from 'prop-types';
import ConstructionInfo from './ConstructionInfo';
import BuildingInfo from './BuildingInfo';
import InventoryMenu from './InventoryMenu';
import BuildMenu from './BuildMenu';

export default class Menu extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			selected: null,
			building: null,
			menu: null,
			demolish: false,
		};

		this.select = this.select.bind(this);
		this.demolish = this.demolish.bind(this);
		this.menu = this.menu.bind(this);
		props.buildings.setBuilding = building => this.setState({building});
	}

	select(building) {
		this.props.buildings.select(building);
		this.setState({selected: building, menu: null});
	}

	demolish(state) {
		this.props.buildings.demolish = state;
		this.setState({demolish: state});
	}

	menu(type) {
		if(this.state.menu === type)
			type = null;
		this.setState({menu: type});
	}

	render() {
		if(this.state.selected)
			return <ConstructionInfo
				building={this.state.selected}
				onCancel={() => this.select(null)}
				onRotate={() => this.props.buildings.rotate()} />;

		if(this.state.building)
			return <BuildingInfo
				building={this.state.building}
				onCancel={() => this.setState({building: null})}
				onCollect={type => this.props.buildings.collect(this.state.building, type)} />;

		return <div>
			{this.state.menu === 'inventory' &&
				<InventoryMenu onClose={() => this.menu(null)}/>}

			{this.state.menu && this.state.menu !== 'inventory' &&
				<BuildMenu type={this.state.menu} onSelect={this.select} onClose={() => this.menu(null)}/>}

			<button onClick={() => this.menu('mining')}>Mining</button>
			<button onClick={() => this.menu('production')}>Production</button>
			<button onClick={() => this.menu('logistics')}>Logistics</button>
			<button onClick={() => this.menu('inventory')}>Resources</button>

			<button
				className={this.state.demolish && 'danger'}
				onClick={() => this.demolish(!this.state.demolish)}>Demolish</button>
		</div>;
	}
}

Menu.propTypes = {
	buildings: PropTypes.object
};

Menu.defaultProps = {};

