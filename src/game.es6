import Game from 'tin-engine/core/game.es6';
import graphics from 'tin-engine/core/graphic';
import mouse from 'tin-engine/core/mouse';
import config from './config/config';
import TitleScene from './scenes/TitleScene';


window.onload = () => {
	// preload graphics here
	// graphics.add('img/rooms/stairs.png');

	graphics.load(() => {
		document.getElementById('loading').style.display = 'none';

		const game = new Game(config);
		mouse.init(game);
		game.run(new TitleScene());
	});
};
