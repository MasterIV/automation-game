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



 ALL RECIPES FOR LEVEL 1:

 * power, iron, hydrogen, and copper are available to build immediately
 *
 * IC factory - requires silicon and copper
 * robots - requires circuits and iron
 * vehicles - requires hydrogen and iron
 * soil replenisher - requires robots and vehicles

When the soil replenisher has received enough robots and vehicles, the ground clears up.

LEVEL 2: Clean up water
	new resource: 

LEVEL 3: Clean up air pollution
	new resource: water


 */

export default {

// Resources
	silicon_mine: {
		name: 'Silicon Mine',
		description: 'Extracts silicon, needed for electronics.',
		image: 'img/buildings/silicon_factory.png',
		type: 'mining',
		production: 500,
		output: {silicon: 1},
		stack: 20,
		speed: 100,
		size: new V2(1, 1),
		destination: new V2(0, 2),
		milestone: 0
	},
	test_mine: {
		name: 'Test Mine',
		description: 'Test animations.',
		image: 'img/plus.png',
		type: 'mining',
		production: 500,
		output: {hydrogen: 1},
		stack: 20,
		speed: 100,
		frames: 8,
		size: new V2(1, 1),
		destination: new V2(0, 2),
		milestone: 0
},
	hydrogen_mine: {
		name: 'Hydrogen Mine',
		description: 'Extracts hydrogen, an efficient fuel.',
		image: 'img/buildings/hydrogen_factory.png',
		type: 'mining',
		production: 500,
		output: {hydrogen: 1},
		stack: 20,
		speed: 100,
		size: new V2(1, 1),
		destination: new V2(0, 2),
		milestone: 0
	},
	iron_mine: {
		name: 'Iron Mine',
		description: 'Extracts iron, good for construction.',
		image: 'img/buildings/iron_factory.png',
		type: 'mining',
		production: 500,
		output: {iron: 1},
		stack: 20,
		speed: 100,
		size: new V2(1, 1),
		destination: new V2(0, 2),
		milestone: 0
	},
	copper_mine: {
		name: 'Copper Mine',
		description: 'Extracts copper, great for leading electricity.',
		image: 'img/buildings/copper_factory.png',
		type: 'mining',
		production: 500,
		output: {copper: 1},
		stack: 20,
		speed: 100,
		size: new V2(1, 1),
		destination: new V2(0, 2),
		milestone: 0
	},

// Refining
	IC_manufacturer: {
		name: 'Circuit Plant',
		description: 'Produces integrated circuits.',
		image: 'img/buildings/ic_factory.png',
		type: 'production',
		production: 500,
		input: { silicon: 1, copper: 1 },
		output: {circuit: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 2),
		destination: new V2(0, 2),
		milestone: 0
	},
	robot_factory: {
		name: 'Robot Factory',
		description: 'Manufactures the best robots iron can make.',
		image: 'img/buildings/robot_factory.png',
		type: 'production',
		production: 500,
		input: { circuit: 1, iron: 1 },
		output: {robot: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 2),
		destination: new V2(0, 2),
		milestone: 0
	},
	vehicle_factory: {
		name: 'Vehicle Factory',
		description: 'Produces hydrogen-fueled vehicles that can remove pollution from soil.',
		image: 'img/buildings/vehicle_factory.png',
		type: 'production',
		production: 500,
		input: { hydrogen:1, iron: 1 },
		output: {vehicle: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 2),
		destination: new V2(0, 2),
		milestone: 0
	},
	// drone_factory: {
		// name: 'Drone Factory',
		// description: 'Produces drones that can clean up the environment.',
		// image: 'img/buildings/dummy_factory.png',
		// type: 'production',
		// production: 500,
		// output: {drone: 1},
		// stack: 20,
		// speed: 100,
		// size: new V2(2, 2),
		// destination: new V2(0, 2),
		// milestone: 0
	// },
	soil_replenisher: {
		name: 'Soil Replenisher',
		description: 'Robots and vehicles are sent out to clean up the soil.',
		image: 'img/buildings/soil_replenisher.png',
		type: 'production',
		production: 500,
		input: { robot: 5, vehicle: 5 },
		output: {victory_point: 1},
		stack: 20,
		speed: 100,
		size: new V2(4, 4),
		destination: new V2(0, 2),
		milestone: 0
	},

// Power supply
	wind_power: {
		name: 'Wind power plant',
		description: 'Produces electricity from fast moving air.',
		image: 'img/buildings/wind_power.png',
		type: 'power',
		production: 500,
		frames: 4,
		output: {power: 1},
		stack: 20,
		speed: 100,
		size: new V2(1, 1),
		destination: new V2(0, 1),
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
		name: 'Conveyor belt',
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
