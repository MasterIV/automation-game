/**
 * Created by Syrup on 30.01.2021.
 */
import Entity from 'tin-engine/basic/entity';
import Animation from './Animation';
import ImageEntity from 'tin-engine/basic/image';
import V2 from 'tin-engine/geo/v2';

export function rotate(r, v, s) {
	for(let i=0; i<r;i++)
		v = new V2(-v.y, v.x);

	if(r==1) return v.sum(new V2(s.y-1,0));
	else if(r==2) return v.sum(new V2(s.x-1, s.y-1));
	else if(r==3) return v.sum(new V2(0, s.x-1));
	else return v;
}

export default class Rotateable extends Entity {
	constructor(pos, grid, rota, definition) {
		super(pos);

		this.def = definition;
		this.rota = rota;

		const offset = rotate(rota, definition.destination, definition.size);
		console.log(offset);
		this.dest = grid.sum(offset);

		if(definition.frames) {
			if(!Animation.groups[definition.image])
				Animation.add(definition.image, 200, definition.frames);
			this.img = new Animation(definition.image, definition.image);
		} else {
			this.img = new ImageEntity(null, definition.image);
		}

		this.img.position = this.img.size.quo(-2);
		this.add(this.img);
	}

	draw(ctx) {
		ctx.save();
		ctx.translate(this.position.x, this.position.y);
		if(this.rota%2) ctx.translate(this.size.y/2, this.size.x/2);
		else ctx.translate(this.size.x/2, this.size.y/2);
		ctx.rotate(Math.PI * this.rota/2);

		if (this.onDraw) this.onDraw(ctx);
		this.dispatch(this.entities, 'draw', ctx);

		ctx.restore();
	}
}
