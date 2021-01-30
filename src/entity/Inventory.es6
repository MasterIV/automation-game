export default class Inventory {
	constructor() {
		this.items = {};
	}

	add(items) {
		for(let i in items)
			this.items[i] = (this.items[i]|0) +  items[i];
	}

	has(items) {
		for(let i in items)
			if( this.items[i] < items[i])
				return false;
		return true;
	}

	remove(items) {
		for(let i in items)
			this.items[i] = (this.items[i]|0) - items[i];
	}

	empty() {
		return this.size() == 0;
	}

	size() {
		let size = 0;
		for(let i in this.items)
			size += (this.items[i]|0);
		return size;
	}
}
