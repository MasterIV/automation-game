import Entity from 'tin-engine/basic/entity';

export default class BuildingMap extends Entity {
	constructor() {
		super();
		this.map = [];
		this.selected = null;
	}

	select(type) {
		this.selected = type;
	}

	build(x, y) {

	}

	demolish(x, y) {

	}

	buildingAt(x, y) {

	}
}
