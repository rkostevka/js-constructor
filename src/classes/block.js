import { css } from "../utils";
class Block {
	constructor(value, options) {
		this.value = value;
		this.options = options;
	}
	toHtml() {
		throw new Error("Method toHtml must be implemented");
	}
}

export class ImageBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}
	toHtml() {
		return `
			<div class="image-container">
				<div class="image-container__img">
					<img src="${this.value}" alt="my photo" class="img-fluid">
				</div>
			</div>
		`;
	}
}

export class TitleBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}
	toHtml() {
		const styles = css(this.options.styles);

		return `
		<div class="sidebar__title title">
			<h1 class="title__name" style="${styles}">${this.value.name}</h1>
			<h4 class="title__position">${this.value.position}</h4>
		</div>
		<div class="sidebar__line"></div>
	`;
	}
}

export class InfoBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}
	toHtml() {
		let html = `<div class="sidebar__info info">`;
		Object.entries(this.value).forEach(([key, val]) => {
			html += `
				<div class="info__box">
					<div class="info__title">
						<h5>${val.title}</h5>
					</div>
					<div class="info__text">
						${Array.isArray(val.text) ? val.text.join("<br>") : val.text}
					</div>
				</div>
			`;
		});
		html += `</div>`;
		return html;
	}
}
