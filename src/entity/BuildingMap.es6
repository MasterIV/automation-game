import Entity from 'tin-engine/basic/entity';
import Building from './Building';

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

		this.selected = null;
		this.demolish = false;
	}

	select(type) {
		this.selected = type;
	}

	buildingAt(x, y) {
		return this.map[x][y];
	}

	isValid(pos, definition) {
		const size = definition.size;

		for (let x = 0; x < size.x; x++)
			for (let y = 0; y < size.y; y++)
				if (this.buildingAt(pos.x + x, pos.y + y))
					return false;

		return true;
	}

	onClick(pos) {
		pos.grid(t,t);

		if(this.selected && this.isValid(pos, this.selected)) {
			// check and deduct resources

			const size = this.selected.size;
			const building = new Building(pos.prd(t), 0, this.selected);

			for (let x = 0; x < size.x; x++)
				for (let y = 0; y < size.y; y++)
					this.map[pos.x+x][pos.y+y] = building;

			console.log(this.map);

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
			ctx.fillRect(pos.x*t, pos.y*t, this.selected.size.x*t, this.selected.size.y*t)
		}
	}
}
