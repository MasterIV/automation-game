import React from 'react';
import PropTypes from 'prop-types';
import state from '../entity/State';
import buildings from '../config/buildings';
import ItemList from './ItemList';

export default function DemolishMenu({building, type, onSelect, onClose, unselect, demolishBuilding}) {
	console.log(building);
	if(building) {
		return <div>
		<span>Do you really want to demolish the {building.def.name}? <button onClick={demolishBuilding}>Yes</button><button onClick={unselect}>No</button></span>
		</div>;
	}
	return <div>
		Click on a building to demolish . . . <button onClick={onClose}>Back</button>
	</div>;
}

DemolishMenu.propTypes = {
	onSelect: PropTypes.func,
	onClose: PropTypes.func,
	type: PropTypes.string,
};

DemolishMenu.defaultProps = {};

