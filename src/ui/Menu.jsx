import React from 'react';
import PropTypes from 'prop-types';
import buildings from '../config/buildings';

export default function Menu(props) {
	return <div>
		<button onClick={() => props.buildings.select(buildings.dummy_replicator)}>Mining</button>
		<button onClick={() => props.buildings.select(buildings.conveyor)}>Production</button>
		<button>Logistics</button>
		<button>Resources</button>
	</div>;
}

Menu.propTypes = {
	buildings: PropTypes.object
};

Menu.defaultProps = {};

