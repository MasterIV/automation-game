import Scene from 'tin-engine/lib/scene';
import V2 from 'tin-engine/geo/v2';
import config from '../config/config';
import Button from 'tin-engine/basic/button';
import GameScene from './GameScene';
import CreditsScene from './CreditsScene';
import {VerticalLayout} from 'tin-engine/basic/layout';


export default class TitleScene extends Scene {
	constructor() {
		super();
		this.setSize(config.screen.w, config.screen.h);
		// this.bg = 'img/title.png';

		const layout = new VerticalLayout(new V2(0, 100), 0, 30);
		var playButton = Button.create(new V2(251, 321), () => {
			this.parent.goto(new GameScene());
		}).rect(200, 50).text('Play');

		var creditsButton = Button.create(new V2(208, 404), () => this.parent.goto(new CreditsScene())).rect(200, 50).text('Credits');
		var helpButton = Button.create(new V2(249, 363), () => window.open('https://github.com/MasterIV/automation-game')).rect(200, 50).text('Help');

		layout.add(playButton);
		layout.add(helpButton);
		layout.add(creditsButton);
		this.center(layout);
	}
}
