import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';

export default function BuildingInfo({building, onCancel, onCollect}) {
	return <div className="construction-info">
		<span className="title">{building.def.name}</span>
		<div className="preview" style={{backgroundImage:`url(${building.def.image})`}}></div>
		{building.inv && <ItemList title='Inventory' item={building.inv.items} onClick={onCollect} />}
		<button onClick={onCancel}>cancel</button>
	</div>;
}

BuildingInfo.propTypes = {
	building: PropTypes.object,
	onCancel: PropTypes.func,
	onCollect: PropTypes.func,
};

BuildingInfo.defaultProps = {};

