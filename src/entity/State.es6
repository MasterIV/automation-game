import Inventory from './Inventory';
import milestones from '../config/milestones';

function checkMilestone() {
	const current = state.current();

	if(state.inventory.has(current.requirement)) {
		state.inventory.remove(current.requirement);

		current.unlocks.forEach(u => state.unlocks.push(u));
		state.milestone++;

		if(state.callback)
			state.callback(state.current());
	}
}

const state = {
	inventory: new Inventory(checkMilestone),
	unlocks: [],
	milestone: 0,
	current: () => milestones[state.milestone],
};

export default state;
