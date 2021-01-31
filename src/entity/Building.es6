import Inventory from './Inventory';
import Morph from 'tin-engine/basic/morph';
import Item from './Item';
import Rotateable from './Rotateable';

export default class Building extends Rotateable {
	constructor(pos, grid, rota, definition) {
		super(pos, grid, rota, definition);
		super(pos);
		console.log("building: ", pos);
		console.log("building: ", this.position);

		// translate the destination
		// maybe collect the closest tile within the destination to be the origin
		 this.dest = grid.sum(definition.destination);
		this.rota = rota;

		this.inv = new Inventory();
		this.processing = 0;
		
		this.definition = definition;

		if(definition.frames) {
			if(!Animation.groups[definition.image])
				Animation.add(definition.image, 200, definition.frames);
			this.add(new Animation(definition.image, definition.image));
		} else {
			this.add(new ImageEntity(null, definition.image));
		}
	}

	draw(ctx) {
		ctx.save();
		// ctx.translate(this.position.x, this.position.y);
		// ctx.rotate(Math.PI * this.rota/2);

		// Do rotation stuff here
		//
		// if(this.rota == 0) ctx.translate( -32, -32);
		// else if(this.rota == 1) ctx.translate(this.size.y, 0);
		// if(this.rota == 1) ctx.translate(32, 32);
		// else if(this.rota ==2) ctx.translate(-this.size.x, -this.size.y);
		// else if(this.rota == 3) ctx.translate(0, this.size.x);
		// if(this.rota == 1) ctx.translate(this.size.y + 32, 0);
		// else if(this.rota == 2) ctx.translate(-this.size.x, -this.size.y);
		// else if(this.rota == 3) ctx.translate(0, this.size.x - 32);
		// ctx.translate(this.position.x, this.position.y);

		if (this.onDraw) this.onDraw(ctx);
		this.dispatch(this.entities, 'draw', ctx);

		ctx.restore();
	}

	accepts(type) {
		return (this.def.type === 'storage' && this.inv.size() < this.def.stack) || // storage building
				(this.def.input && this.def.input[type] && this.inv.get(type) < this.def.stack); // production building
	}

	pass(item) {
		// storage and production
		item.add(new Morph({
			position: this.position
		}, this.def.speed, null, () => {
			this.inv.add({[item.type]: 1});
			item.parent.remove(item);
		}))
	}

	first(items) {
		for(let i in items) {
			if(this.inv.has({[i]: 1}))
				return i;
		}
	}

	full() {
		for(let i in this.def.output)
			if(this.inv.get(i) >= this.def.stack)
				return true;
		return false;
	}

	onUpdate(delta) {
		// production
		if(this.processing > 0) {
			this.processing -= delta;
			if(this.processing < 1) {
				// complete production
				this.inv.add(this.def.output);
			}
		} else if(this.def.production && !this.full()) {
			if(!this.def.input || this.inv.has(this.def.input)) {
				// start production
				this.inv.remove(this.def.input);
				this.processing = this.def.production;
			}
		}

		// production and storage building
		if(!this.inv.empty()) {
			let type = null;

			if(this.def.output) {
				type = this.first(this.def.output)
			} else {
				type = this.first(this.inv.items);
			}

			const dst = this.parent.buildingAt(this.dest.x, this.dest.y);
			if(dst && type && dst.accepts(type)) {
				const item = new Item(this.position.clone(), type);
				this.parent.parent.add(item);
				this.inv.remove({[type]: 1});
				dst.pass(item);
			}
		}
	}
}
