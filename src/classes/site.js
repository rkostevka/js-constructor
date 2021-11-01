export class Site {
	constructor(selector, updateCallBack) {
		this.$el = document.querySelector(selector);
		this.update = updateCallBack;
	}

	render(model){
		model.forEach((item) => {
			this.$el.insertAdjacentHTML("beforeend", item.toHtml());
		});
	}
	clearHtml(){
		
	}

}