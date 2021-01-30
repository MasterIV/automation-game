import React from 'react';
import PropTypes from 'prop-types';
import items from '../config/items';

export default function ItemList({item, title}) {
	return <fieldset>
		<legend>{title}</legend>
		{Object.keys(item).map(i => <span className="item" key={i} title={items[i].name}>
			<img src={items[i].image} alt={items[i].name}/> {item[i]}
		</span>)}
	</fieldset>;
}

ItemList.propTypes = {
	items: PropTypes.object,
	title: PropTypes.string,
};

ItemList.defaultProps = {};

