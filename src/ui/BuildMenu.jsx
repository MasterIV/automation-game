import React from 'react';
import PropTypes from 'prop-types';
import state from '../entity/State';
import buildings from '../config/buildings';
import items from '../config/items';

export default function BuildMenu({type, select}) {
	return <div>
		{state.unlocks
			.map(u => buildings[u])
			.filter(d => d.type === type)
			.map(b => <div onClick={select(b)} key={b.name}>
				<span>{b.name}</span>
				<span>{b.description}</span>
				{b.cost && <span>
					{Object.keys(b.cost).map(i => <span key={i} title={items[i].name}>
						<img src={items[i].image} alt={items[i].name}/> {b.cost[i]}
					</span>)}
				</span>}
			</div>)}
	</div>;
}

BuildMenu.propTypes = {
	select: PropTypes.func,
	type: PropTypes.string,
};

BuildMenu.defaultProps = {};

