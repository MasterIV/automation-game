import Entity from 'tin-engine/basic/entity.es6';
import graphics from 'tin-engine/core/graphic.es6';
import V2 from 'tin-engine/geo/v2.es6';

export default class Animation extends Entity {
	constructor(img, group, states) {
		super();

		this.img = graphics[img];
		this.states = states || 1;
		this.state = 0;

		this.group = Animation.groups[group];

		this.size = new V2(this.img.width / this.group.frames, this.img.height / this.states);
	}

	onDraw(ctx) {
		ctx.drawImage(this.img, this.group.frame * this.size.x, this.state * this.size.y, this.size.x, this.size.y, 0, 0, this.size.x, this.size.y);
	}
}

Animation.groups = {};

Animation.add = (name, duration, frames) => {
	Animation.groups[name] = {
		duration, frames,
		anitime: 0,
		frame: 0,
	}
};

Animation.update = (delta) => {
	for (let name in Animation.groups) {
		let group = Animation.groups[name];

		group.anitime += delta;
		group.frame = Math.floor(group.anitime / group.duration);

		group.frame %= group.frames;
		group.anitime %= group.frames * group.duration;
	}
};

