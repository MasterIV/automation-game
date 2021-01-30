import React from 'react';
import PropTypes from 'prop-types';
import state from '../entity/State';
import buildings from '../config/buildings';
import ItemList from './ItemList';

export default function BuildMenu({type, onSelect, onClose}) {
	return <div className="menu-window">
		<div className="headline">
			<span>{type}</span>
			<button onClick={onClose}>Close</button>
		</div>

		{state.unlocks
			.map(u => buildings[u])
			.filter(d => d.type === type)
			.map(b => <div onClick={() => onSelect(b)} key={b.name} className="building">
				<div className="title">{b.name}</div>
				<div className="preview" style={{backgroundImage:`url(${b.image})`}}></div>
				<div className="description">{b.description}</div>

				{b.cost && <ItemList title='Cost' item={b.cost} />}
				{b.output && <ItemList title='Input' item={b.output} />}
				{b.input && <ItemList title='Input' item={b.input} />}
			</div>)}
	</div>;
}

BuildMenu.propTypes = {
	onSelect: PropTypes.func,
	onClose: PropTypes.func,
	type: PropTypes.string,
};

BuildMenu.defaultProps = {};

