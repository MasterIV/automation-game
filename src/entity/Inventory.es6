export default class Inventory {
	constructor(listener) {
		this.items = {};
		this.listener = listener;
	}

	add(items) {
		if(!items) return;

		for(let i in items)
			this.items[i] = (this.items[i]|0) +  items[i];

		if(this.listener)
			this.listener(this.items);
	}

	has(items) {
		if(!items)
			return true;
		for(let i in items)
			if( this.items[i] < items[i])
				return false;
		return true;
	}

	remove(items) {
		if(!items) return;
		
		for(let i in items)
			this.items[i] = (this.items[i]|0) - items[i];

		if(this.listener)
			this.listener(this.items);
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

	get(type) {
		return this.items[type] | 0;
	}
}
