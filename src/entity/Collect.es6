import Entity from 'tin-engine/basic/entity.es6';
import V2 from 'tin-engine/geo/v2.es6';
import Item from './Item';


export default class Collect extends Entity {
	constructor(pos, item, text) {
		super(pos);

		this.start = pos;
		this.text = text;
		this.duration = 700;
		this.anitime = 0;

		this.add(new Item(new V2(-25, -25), item));
	}

	onUpdate(delta) {
		this.anitime += delta;

		if(this.anitime > this.duration) {
			this.parent.remove(this);
		} else {
			this.position = new V2(this.start.x, this.start.y - 10 + 30 * Math.cos(Math.PI*2*(this.anitime+50)/(this.duration+50)));
		}
	}

	onDraw(ctx) {
		ctx.font = '18pt Verdana, sans-serif';
		ctx.textAlign = 'left';

		ctx.fillStyle = "rgba(30,30,30,0.5)";
		ctx.fillText(this.text, 10, 0);
		ctx.fillStyle = "rgba(230,230,230,1)";
		ctx.fillText(this.text, 9, -1 );
	}
}

