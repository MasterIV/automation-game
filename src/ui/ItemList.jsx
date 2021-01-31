import React from 'react';
import PropTypes from 'prop-types';
import items from '../config/items';

export default function ItemList({item, title, onClick}) {
	const getClickHandler =  type => onClick ? () => onClick(type) : null;

	return <fieldset>
		<legend>{title}</legend>
		{Object.keys(item).map(i => <span className="item" key={i} title={items[i].name} onClick={getClickHandler(i)}>
			<img src={items[i].image} alt={items[i].name}/> {item[i]}
		</span>)}
	</fieldset>;
}

ItemList.propTypes = {
	item: PropTypes.object,
	title: PropTypes.string,
	onClick: PropTypes.func
};

ItemList.defaultProps = {};

