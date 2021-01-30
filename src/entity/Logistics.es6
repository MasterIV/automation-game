import Entity from 'tin-engine/basic/entity';
import Animation from './Animation';
import ImageEntity from 'tin-engine/basic/image';
import Morph from 'tin-engine/basic/morph';

export default class Building extends Entity {
	constructor(pos, grid, rotation, definition) {
		console.log(pos);
		super(pos);

		this.dest = grid.sum(definition.destination);
		this.def = definition;
		this.item = null;
		this.completed = false;

		if(definition.frames) {
			if(!Animation.groups[definition.image])
				Animation.add(definition.image, 200, definition.frames);
			this.add(new Animation(definition.image, definition.image));
		} else {
			this.add(new ImageEntity(null, definition.image));
		}
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
