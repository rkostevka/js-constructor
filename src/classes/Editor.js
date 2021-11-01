import { model } from "../models/model";
import { Site } from "./site";

export class Editor {
	constructor(selector, updateCallBack) {
		this.$el = document.querySelector(selector);
		this.$modals = document.querySelector("#modals");
		this.update = updateCallBack;
		this.init();
	}

	init() {
		this.$modals.addEventListener("submit", this.add.bind(this));
	}

	add(event) {
		event.preventDefault();
		const modelTitle = event.target.id;
		console.log(modelTitle);
		model.forEach((element) => {
			if (element.constructor.name === 'TitleBlock') {
				element.value.name = event.target.name.value;
				element.value.position = event.target.position.value;
				while (this.$el.lastElementChild) {
					this.$el.removeChild(this.$el.lastElementChild);
				}
				this.update(element);
			} else if (element.constructor.name === modelTitle) {
			}
		});
		
	}
}
