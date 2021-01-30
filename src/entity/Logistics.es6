import Morph from 'tin-engine/basic/morph';
import Rotateable from './Rotateable';

export default class Building extends Rotateable {
	constructor(pos, grid, rotation, definition) {
		super(pos, grid, rotation, definition);
		this.item = null;
		this.completed = false;
	}

	accepts() {
		return !this.item;
	}

	pass(item) {
		this.item = item;

		item.add(new Morph({
			position: this.position.clone()
		}, this.def.speed, null, () => {
			this.completed = true;
		}))
	}

	onUpdate(delta) {
		if(this.item && this.completed) {
			const dst = this.parent.buildingAt(this.dest.x, this.dest.y);
			if(dst && dst.accepts(this.item.type)) {
				dst.pass(this.item);
				this.item = null;
				this.completed = false;
			}
		}
	}
}
