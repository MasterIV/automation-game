import Scene from 'tin-engine/lib/scene';
import config from '../config/config';
import Viewport from 'tin-engine/lib/viewport';
import TileMap from 'tin-engine/lib/map';

export default class GameScene extends Scene {
	constructor() {
		super();
		this.setSize(config.screen.w, config.screen.h);
		// this.bg = 'img/title.png';

		const map = new TileMap('main');

		const viewport = new Viewport();
		viewport.dragable(true);
		viewport.add(map);
		this.add(viewport);


	}
}
