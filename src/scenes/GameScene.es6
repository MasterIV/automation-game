import Scene from 'tin-engine/lib/scene';
import config from '../config/config';

export default class GameScene extends Scene {
	constructor() {
		super();
		this.setSize(config.screen.w, config.screen.h);
		// this.bg = 'img/title.png';
	}
}