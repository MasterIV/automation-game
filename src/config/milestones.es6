export default [
	{
		description: 'Find the required resources on the map and click them to collect them.',
		requirement: {wood:5, iron_ore:5, copper_ore: 5, stone:5},
		unlocks: ['lumberjack', 'quarry'],
	},
	{
		description: 'You can build mining buildings to automatically harvest resources. Click the building to directly collect resources from it.',
		requirement: {wood: 100, stone: 100},
		unlocks: ['sawmill', 'stone_cutter'],
	},
	{
		description: 'Place processing buildings at the output of your mining buildings to process resources automatically.',
		requirement: {plank: 50, cut_stone: 50},
		unlocks: ['conveyor', 'iron_mine', 'iron_smelter', 'crate_factory', 'gear_factory'],
	},
	{
		description: 'Some items will need multiple inputs to produce, you can use conveyor belts to transport the items across the map to where they are needed.',
		requirement: {crate: 25},
		unlocks: ['copper_mine', 'copper_smelter', 'wire_factory', 'magnet_factory', 'catapult'],
	},
	{
		description: 'Belts are getting more complicated. Use the conveyor catapult to transport items over another belt.',
		requirement: {crate: 50, magnet: 25},
		unlocks: ['coal_mine', 'titan_mine', 'titan_smelter', 'relay_factory'],
	},
	{
		description: 'Continue unlocking milestones so we have the material to restore the planet.',
		requirement: {titan_bar: 50, relay: 30},
		unlocks: [],
	},
	{
		description: 'You reached the temporary end of the game.',
		requirement: {dummy: 1},
		unlocks: [],
	},
];
