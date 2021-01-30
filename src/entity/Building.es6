import Entity from 'tin-engine/basic/entity';
import Animation from 'tin-engine/lib/animation';
import ImageEntity from 'tin-engine/basic/image';
import Inventory from './Inventory';

export default class Building extends Entity {
	constructor(pos, rotation, definition) {
		super(pos);

		this.inv = new Inventory();
		this.def = definition;
		this.processing = 0;
		this.moving = 0;

		this.add( definition.frames
			? new Animation(definition.image, null, definition.frames, 200, true)
			: new ImageEntity(null, definition.image))
	}

	accepts(item) {

	}

	onUpdate(delta) {
		if(this.processing > 0) {
			this.processing -= delta;
			if(this.processing < 1) {
				// complete production
				this.inv.add(this.def.output);
			}
		} else if(this.def.production && this.accepts(this.def.output)) {
			if(!this.def.input || this.inv.has(this.def.input)) {
				// start production
				this.inv.remove(this.def.input);
				this.processing = this.def.production;
			}
		}

		if(this.moving > 0) {

		} else if(!this.inv.empty()) {

		}
	}
}
