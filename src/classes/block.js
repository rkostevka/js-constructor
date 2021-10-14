class Block {
	constructor(type, value, options){
		this.type = type;
		this.value = value;
		this.options = options;
	}
}

export class ImageBlock extends Block {
	constructor(value, options) {
		super('image', value, options);
	}
}

export class TitleBlock extends Block {
	constructor(value, options){
		super('title', value, options);
	}
}

export class InfoBlock extends Block {
	constructor(value, options) {
		super('info', value, options);
	}
}