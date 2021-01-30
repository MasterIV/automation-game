import Scene from 'tin-engine/lib/scene';
import config from '../config/config';
import Viewport from 'tin-engine/lib/viewport';
import TileMap from 'tin-engine/lib/map';
import Menu from '../ui/Menu';
import React from 'react';
import ReactDOM from 'react-dom';

export default class GameScene extends Scene {
	constructor() {
		super();
		this.setSize(config.screen.w, config.screen.h);
		// this.bg = 'img/title.png';

		const map = new TileMap('default');

		const viewport = new Viewport();
		viewport.dragable(true);
		viewport.add(map.render());
		this.add(viewport);

		ReactDOM.render(
			React.createElement(Menu, {}),
			document.getElementById('ui'));
	}
}
