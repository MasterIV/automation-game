import ImageEntity from 'tin-engine/basic/image';

export default class Item extends ImageEntity {
	constructor(pos, definition) {
		this.def = definition;
		super(pos, definition.image);
	}
}
