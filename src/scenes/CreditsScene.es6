import Scene from 'tin-engine/lib/scene';
import V2 from 'tin-engine/geo/v2';
import config from '../config/config';
import Button from 'tin-engine/basic/button';
import TitleScene from './TitleScene';

export default class CreditsScene extends Scene {
	constructor() {
		super();
		this.setSize(config.screen.w, config.screen.h);
		this.bg = 'img/aboutscreen.png';

		const backButton = Button.create(new V2(900, 200), () => this.parent.goto(new TitleScene())).img("img/button_back.png", 1);
		this.add(backButton);
	}
}
