import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import state from '../entity/State';


export default function InventoryMenu({onClose}) {
	const milestone = state.current();

	return <div className="menu-window inventory">
		<div className="headline">
			<span>Inventory</span>
			<button onClick={onClose}>Close</button>
		</div>

		<ItemList title="Inventory Items" item={state.inventory.items} />

		<div className="headline">
			<span>Next milestone</span>
		</div>

		<p>{milestone.description}</p>

		<ItemList title="Requirements" item={milestone.requirement} />
	</div>;
}

InventoryMenu.propTypes = {
	onClose: PropTypes.func,
};

InventoryMenu.defaultProps = {};

