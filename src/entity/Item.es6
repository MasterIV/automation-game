import ImageEntity from 'tin-engine/basic/image';
import items from '../config/items';

export default class Item extends ImageEntity {
	constructor(pos, type) {
		super(pos, items[type].image);
		this.type = type;
		this.def = items[type];
	}
}
