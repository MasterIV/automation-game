/**
 * Created by Syrup on 30.01.2021.
 */
import Entity from 'tin-engine/basic/entity';
import Animation from './Animation';
import ImageEntity from 'tin-engine/basic/image';

export default class Rotateable extends Entity {
	constructor(pos, grid, rota, definition) {
		super(pos);

		// translate the destination
		// maybe collect the closest tile within the destination to be the origin
		this.dest = grid.sum(definition.destination);
		this.def = definition;
		this.rota = rota;

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
