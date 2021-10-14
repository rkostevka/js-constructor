export class Site {
	constructor(selector) {
		this.$el = document.querySelector(selector);
	}

	render(model){
		model.forEach((item) => {
			this.$el.insertAdjacentHTML("beforeend", item.toHtml());
		});
	}

}