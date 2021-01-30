import V2 from 'tin-engine/geo/v2';

/*
Building properties:
 - name: name of the building
 - description: helpful information about the building function
 - image: image file of the building
 - frames: optional, number of frames if the image contains an animation
 - input: number and type of items required for production
 - storage: number of storage slots (storage buildings only)
 - stack: max items per slot
 - production: number of milliseconds production takes
 - output: number and type of items generated
 - speed: milliseconds the building needs to move an item
 - size: V2 defining the size of the building
 - destination: output location for the building relative to its origin point
 */

export default {
	dummy_replicator: {
		name: 'Dummy Replicator',
		description: 'Produces free dummy items!',
		image: 'img/buildings/dummy_factory.png',
		type: 'mining',
		production: 500,
		output: {dummy: 1},
		stack: 20,
		speed: 100,
		size: new V2(2, 2),
		destination: new V2(0, 2)
	},
	conveyor: {
		name: 'Straight Conveyor',
		description: 'Moves items in a straight line',
		image: 'img/buildings/conveyor_straight.png',
		frames: 3,
		type: 'logistics',
		speed: 200,
		size: new V2(1, 1),
		destination: new V2(1, 0)
	}
};
