import Scene from 'tin-engine/lib/scene';
import V2 from 'tin-engine/geo/v2';
import config from '../config/config';
import Button from 'tin-engine/basic/button';
import GameScene from './GameScene';
import HelpScene from './HelpScene';
import CreditsScene from './CreditsScene';
import {VerticalLayout} from 'tin-engine/basic/layout';


export default class TitleScene extends Scene {
	constructor() {
		super();
		this.setSize(config.screen.w, config.screen.h);
		this.bg = 'img/title.png';

		const layout = new VerticalLayout(new V2(0, 100), 0, 30);
		const playButton = Button.create(new V2(100, 100), () => {
			this.parent.goto(new GameScene());
		}).img('img/button_play.png', 1);

		const helpButton = Button.create(new V2(249, 363), () => this.parent.goto(new HelpScene())).img("img/button_help.png", 1);
		const creditsButton = Button.create(new V2(208, 404), () => this.parent.goto(new CreditsScene())).img("img/button_credits.png", 1);

		layout.add(playButton);
		// layout.add(helpButton);
		layout.add(creditsButton);
		this.center(layout);
	}
}
