import Scene from 'tin-engine/lib/scene';
import config from '../config/config';
import Viewport from 'tin-engine/lib/viewport';
import BuildingMap from '../entity/BuildingMap';
import TileMap from 'tin-engine/lib/map';
import Menu from '../ui/Menu';
import React from 'react';
import ReactDOM from 'react-dom';
import Animation from '../entity/Animation';

export default class GameScene extends Scene {
	constructor() {
		super();
		this.setSize(config.screen.w, config.screen.h);

		const map = new TileMap('default');
		this.buildings = new BuildingMap(map);

		const viewport = new Viewport();
		viewport.dragable(true);
		viewport.add(map.render());
		viewport.add(this.buildings);
		this.add(viewport);
	}

	onUpdate(delta) {
		Animation.update(delta);

		ReactDOM.render(
			React.createElement(Menu, {buildings: this.buildings}),
			document.getElementById('ui'));
	}
}
