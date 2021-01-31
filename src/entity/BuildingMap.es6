import Entity from 'tin-engine/basic/entity';
import Building from './Building';
import Logistics from './Logistics';
import state from './State';
import items from '../config/items';
import {rotate} from './Rotateable';

// for demo mode

const t = 32;

export default class BuildingMap extends Entity {
	constructor(map) {
		super(null, map.size);

		this.map = [];
		this.resources = map.getLayer('resources');

		for (let x = 0; x < map.tile.x; x++) {
			this.map[x] = [];
			for (let y = 0; y < map.tile.y; y++)
				this.map[x][y] = null;
		}

		this.rotation = 0;
		this.selected = null;
		this.demolish = false;

		this.collectibles = {};
		for(let i in items )
			if(items[i].tile)
				this.collectibles[items[i].tile] = i;
	}

	select(type) {
		this.selected = type;
		this.destination = rotate(this.rotation%4, this.selected.destination, this.selected.size);
	}

	rotate() {
		this.rotation++;
		if(this.selected) {
			this.destination = rotate(this.rotation%4, this.selected.destination, this.selected.size);
		}
	}

	buildingAt(x, y) {
		return this.map[x] && this.map[x][y];
	}

	tileAt(x, y) {
		return this.resources.data[x + (y * this.resources.width)]
	}

	collect(building, type) {
		const items = {[type]: building.inv.get(type)};
		building.inv.remove(items);
		state.inventory.add(items);
	}

	isValid(pos, definition) {
		const size = definition.size;
		let has_required = !definition.required;

		for (let a = 0; a < size.x; a++)
			for (let b = 0; b < size.y; b++) {
				let x,y;
				if(this.rotation%2) { x=b; y=a; }
				else { x=a; y=b; }

				if (this.buildingAt(pos.x + x, pos.y + y))
					return false;

				const tile = this.tileAt(pos.x + x, pos.y + y);
				if (tile !== 0 && tile !== definition.required)
					return false;

				has_required = has_required || tile === definition.required;
			}

		return has_required && state.inventory.has(this.selected.cost);
	}

	demolishB(building) {
		const size = building.size;
			// # ? new Logistics(pos.prd(t), pos, this.rotate%4, this.selected)
			// # : new Building(pos.prd(t), pos, this.rotate%4, this.selected);

		const pos = building.position;

		for (let a = 0; a < size.x; a++)
			for (let b = 0; b < size.y; b++) {
				let x,y;
				if(this.rotation%2) { x=b; y=a; }
				else { x=a; y=b; }

				if(!this.map[pos.x+x])
					this.map[pos.x+x] = [];
				this.map[pos.x+x][pos.y+y] = null;
			}
		this.remove(building);
	}


	build(pos) {
		state.inventory.remove(this.selected.cost);

		const size = this.selected.size;
		const building = this.selected.type === 'logistics'
			? new Logistics(pos.prd(t), pos, this.rotation%4, this.selected)
			: new Building(pos.prd(t), pos, this.rotation%4, this.selected);

		for (let a = 0; a < size.x; a++)
			for (let b = 0; b < size.y; b++) {
				let x,y;
				if(this.rotation%2) { x=b; y=a; }
				else { x=a; y=b; }

				if(!this.map[pos.x+x])
					this.map[pos.x+x] = [];
				this.map[pos.x+x][pos.y+y] = building;
			}

		this.add(building);
	}


	onClick(pos) {
		pos.grid(t,t);
		const building = this.buildingAt(pos.x, pos.y);
		const tile = this.tileAt(pos.x, pos.y);

		if(this.selected && this.isValid(pos, this.selected)) {
			this.build(pos);
		} else if(this.demolish && building) {
			// remove building
			// refund building cost
		} else if(this.setBuilding && building) {
			this.setBuilding(building);
		} else if(tile && this.collectibles[tile]) {
			// show collect animation
			state.inventory.add({[this.collectibles[tile]]: 1});
		}
	}

	onDraw(ctx) {
		if(this.selected) {
			const pos = this.relativeMouse().grid(t,t);
			ctx.fillStyle = this.isValid(pos, this.selected) ? 'rgba(100,100,200,.5)' : 'rgba(200,100,100,.5)';
			if(this.rotation%2) ctx.fillRect(pos.x*t, pos.y*t, this.selected.size.y*t, this.selected.size.x*t);
			else ctx.fillRect(pos.x*t, pos.y*t, this.selected.size.x*t, this.selected.size.y*t);

			// output preview
			ctx.fillStyle = 'rgba(100,200,100,.5)';
			ctx.fillRect((pos.x+this.destination.x)*t+6, (pos.y+this.destination.y)*t+6,20, 20);
		}
	}
}
