import Entity from 'tin-engine/basic/entity';
import Building from './Building';
import Logistics from './Logistics';

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

		this.rotate = 0;
		this.selected = null;
		this.demolish = false;
	}

	select(type) {
		this.selected = type;
	}

	buildingAt(x, y) {
		return this.map[x] && this.map[x][y];
	}

	isValid(pos, definition) {
		const size = definition.size;
		let has_required = !definition.required;

		for (let a = 0; a < size.x; a++)
			for (let b = 0; b < size.y; b++) {
				let x,y;
				if(this.rotate%2) { x=b; y=a; }
				else { x=a; y=b; }

				if (this.buildingAt(pos.x + x, pos.y + y))
					return false;

				const tile = this.resources.data[pos.x + x + ((pos.y + y) * this.resources.width)];
				if (tile !== 0 && tile !== definition.required)
					return false;

				has_required = has_required || tile === definition.required;
			}

		return has_required;
	}

	onClick(pos) {
		pos.grid(t,t);

		if(this.selected && this.isValid(pos, this.selected)) {
			// check and deduct resources

			const size = this.selected.size;
			const building = this.selected.type === 'logistics'
				? new Logistics(pos.prd(t), pos, this.rotate%4, this.selected)
				: new Building(pos.prd(t), pos, this.rotate%4, this.selected);


			for (let a = 0; a < size.x; a++)
				for (let b = 0; b < size.y; b++) {
					let x,y;
					if(this.rotate%2) { x=b; y=a; }
					else { x=a; y=b; }

					this.map[pos.x+x][pos.y+y] = building;
				}

			this.add(building);
			this.selected = null;
		}

		if(this.demolish && this.buildingAt(pos.x, pos.y)) {

		}
	}

	onDraw(ctx) {
		if(this.selected) {
			const pos = this.relativeMouse().grid(t,t);
			ctx.fillStyle = this.isValid(pos, this.selected) ? 'rgba(100,100,200,.5)' : 'rgba(200,100,100,.5)';
			if(this.rotate%2) ctx.fillRect(pos.x*t, pos.y*t, this.selected.size.y*t, this.selected.size.x*t);
			else ctx.fillRect(pos.x*t, pos.y*t, this.selected.size.x*t, this.selected.size.y*t)
		}
	}
}
