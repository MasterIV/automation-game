import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';

export default function ConstructionInfo({building, onCancel, onRotate}) {
	return <div className="construction-info">
		<span className="title">{building.name}</span>
		<div className="preview" style={{backgroundImage:`url(${building.image})`}}></div>
		{building.cost && <ItemList title='Cost' item={building.cost} />}
		<button onClick={onRotate}>Rotate</button>
		<button onClick={onCancel}>cancel</button>
	</div>;
}

ConstructionInfo.propTypes = {
	building: PropTypes.object,
	onCancel: PropTypes.func,
	onRotate: PropTypes.func,
};

ConstructionInfo.defaultProps = {};

