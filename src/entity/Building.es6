import Entity from 'tin-engine/basic/entity';
import Animation from './Animation';
import ImageEntity from 'tin-engine/basic/image';
import Inventory from './Inventory';

export default class Building extends Entity {
	constructor(pos, rotation, definition) {
		super(pos);

		this.inv = new Inventory();
		this.def = definition;
		this.processing = 0;
		this.moving = 0;

		if(definition.frames) {
			if(!Animation.groups[definition.image])
				Animation.add(definition.image, 200, definition.frames);
			this.add(new Animation(definition.image, definition.image));
		} else {
			this.add(new ImageEntity(null, definition.image));
		}
	}

	accepts(type) {
		return (this.def.type === 'storage' && this.inv.size() < this.def.stack) || // storage building
			   (this.def.input && this.def.input[type] && this.inv.get(type) < this.def.stack) || // production building
			   (this.def.type === 'logistics' && this.inv.empty()); // logistics building
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
			this.moving -= delta;
		} else if(!this.inv.empty()) {

		}
	}
}
