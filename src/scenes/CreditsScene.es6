import Scene from 'tin-engine/lib/scene';
import V2 from 'tin-engine/geo/v2';
import config from '../config/config';
import Button from 'tin-engine/basic/button';
import TitleScene from './TitleScene';
import {VerticalLayout} from 'tin-engine/basic/layout';

export default class CreditsScene extends Scene {
	constructor() {
		super();
		this.setSize(config.screen.w, config.screen.h);
		this.bg = 'img/aboutscreen.png';

		const layout = new VerticalLayout(new V2(0, 200), 0, 30);
		const backButton = Button.create(new V2(208, 404), () => this.parent.goto(new TitleScene())).img("img/button_back.png", 1);
		layout.add(backButton);
		this.center(layout);
	}
}
