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
	constructor(isDemo=false) {
		super();
		this.setSize(config.screen.w, config.screen.h);
		// this.bg = 'img/title.png';

		const map = new TileMap('default');
		const buildings = new BuildingMap(map);

		const viewport = new Viewport();
		viewport.dragable(true);
		viewport.add(map.render());
		viewport.add(buildings);
		this.add(viewport);

		this.isDemo = isDemo;	
		if(isDemo) {
			console.log("Demo testing mode...");
			buildings.onDemoMode();
		}
		ReactDOM.render(
			React.createElement(Menu, {buildings}),
			document.getElementById('ui'));
	}

	onUpdate(delta) {
		Animation.update(delta);
	}
}
