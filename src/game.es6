import Game from 'tin-engine/core/game.es6';
import graphics from 'tin-engine/core/graphic';
import mouse from 'tin-engine/core/mouse';
import config from './config/config';
import TitleScene from './scenes/TitleScene';
import items from './config/items';
import buildings from './config/buildings';

window.onload = () => {
	// preload graphics here
	for(let i in items)
		graphics.add(items[i].image);
	for(let i in buildings)
		graphics.add(buildings[i].image);

	// Title screen
	graphics.add("img/title.png");
	graphics.add("img/button_play.png");
	graphics.add("img/button_credits.png");
	graphics.add("img/button_help.png");

	graphics.load(() => {
		document.getElementById('loading').style.display = 'none';

		const game = new Game(config);
		mouse.init(game);
		game.run(new TitleScene());
	});
};
