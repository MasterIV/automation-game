import V2 from 'tin-engine/geo/v2';

/*
 Building properties:
 - name: name of the building
 - description: helpful information about the building function
 - image: image file of the building
 - frames: optional, number of frames if the image contains an animation
 - input: number and type of items required for production
 - stack: max items per slot / inventory size for storage
 - production: number of milliseconds production takes
 - output: number and type of items generated
 - speed: milliseconds the building needs to move an item
 - size: V2 defining the size of the building
 - destination: output location for the building relative to its origin point
 - requires: tile id that it needs to be build on
 - type: type of building: mining, production, power, logistics
 - cost: items required to build this

 =======
 - milestone: required science level

	recipes:

	Level 1: ground
	reqs:
		power
		robots
		vehicles

		robots:
			ic
			iron
		ic:
			see below
		vehicles:
		fuel:
		iron
		engine:fuel


		Soil Replenisher	robots		ic
										iron
							vehicles	iron
										fuel

	target: build an Soil replenisher.

	Level 2: water

	Level 3: air
	new resource: water


 */

export default {

// Resources
	silicon_mine: {
		name: 'Silicon Mine',
		description: 'Extracts silicon.',
		image: 'img/buildings/dummy_factory.png',
		type: 'mining',
		production: 500,
		output: {silicon: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 2),
		destination: new V2(0, 2),
		milestone: 0
	},
	copper_mine: {
		name: 'Copper Mine',
		description: 'Extracts copper.',
		image: 'img/buildings/dummy_factory.png',
		type: 'mining',
		production: 500,
		output: {copper: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 2),
		destination: new V2(0, 2),
		milestone: 0
	},

// Refining
	IC_manufacturer: {
		name: 'Circuit Plant',
		description: 'Produces integrated circuits.',
		image: 'img/buildings/dummy_factory.png',
		type: 'production',
		production: 500,
		output: {circuit: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 2),
		destination: new V2(0, 2),
		milestone: 0
	},
	drone_factory: {
		name: 'Drone Factory',
		description: 'Produces drones that can clean up the environment.',
		image: 'img/buildings/dummy_factory.png',
		type: 'production',
		production: 500,
		output: {drone: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 2),
		destination: new V2(0, 2),
		milestone: 0
	},

// Power supply
	wind_power: {
		name: 'Wind power plant',
		description: 'Produces electricity from fast moving air.',
		image: 'img/buildings/dummy_factory.png',
		type: 'power',
		production: 500,
		output: {power: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 2),
		destination: new V2(0, 2),
		milestone: 0
	},

	dummy_replicator: {
		name: 'Dummy Replicator',
		description: 'Produces free dummy items!',
		image: 'img/buildings/dummy_factory.png',
		type: 'mining',
		production: 500,
		output: {dummy: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 3),
		destination: new V2(0, 3),
		milestone: 0,
		cost: {wood: 1}
	},
	conveyor: {
		name: 'Conveyor',
		description: 'Moves items in a straight line',
		image: 'img/buildings/conveyor_belt.png',
		frames: 3,
		type: 'logistics',
		speed: 200,
		size: new V2(1, 1),
		destination: new V2(1, 0),
		cost: {stone: 1}
	}
};
