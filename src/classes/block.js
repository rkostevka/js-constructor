import { css, editor } from "../utils";
class Block {
	constructor(value, options) {
		this.value = value;
		this.options = options;
		this.editor = editor();
	}
	toHtml() {
		throw new Error("Method toHtml must be implemented");
	}
	renderModal() {
		throw new Error("Method toHtml must be implemented");
	}
}

export class ImageBlock extends Block {
	constructor(value, options, targetModal) {
		super(value, options);
		this.targetModal = targetModal;
	}
	toHtml() {
		return `
			<div class="image-container" data-bs-toggle="modal" data-bs-target="#${this.targetModal}">
				<div class="image-container__img">
					<img src="${this.value}" alt="my photo" class="img-fluid">
				</div>
				${this.editor}
			</div>
		`;
	}
	renderModal(){
		return `
			<div class="modal fade" id="${this.targetModal}" tabindex="-1" aria-labelledby="${this.targetModal}Label" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<form name="${this.targetModal}">
							<div class="modal-header">
								<h5 class="modal-title" id="${this.targetModal}Label">Edit image</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								image
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button type="submit" class="btn btn-primary">Save changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		`;
	}
}

export class TitleBlock extends Block {
	constructor(value, options, targetModal) {
		super(value, options);
		this.targetModal = targetModal;
	}
	toHtml() {
		const styles = css(this.options.styles);
		return `
		<div class="sidebar__title title" id="sidebar-title" data-bs-toggle="modal" data-bs-target="#${this.targetModal}">
			<h1 class="title__name">${this.value.name}</h1>
			<h4 class="title__position">${this.value.position}</h4>
			${this.editor}
		</div>
		<div class="sidebar__line"></div>
	`;
	}
	renderModal(){
		return `
			<div class="modal fade" id="${this.targetModal}" tabindex="-1" aria-labelledby="${this.targetModal}Label" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<form id="TitleBlock">
							<div class="modal-header">
								<h5 class="modal-title" id="${this.targetModal}Label">Edit ${Object.keys(this.value)}</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<div class="mb-3">
									<label for="${this.targetModal}InputEmail1" class="form-label">Name</label>
									<input type="text" class="form-control" id="name" value="${this.value.name}" placeholder="${this.value.name}" name="name">
								</div>
								<div class="mb-3">
									<label for="${this.targetModal}InputEmail1" class="form-label">Position</label>
									<input type="text" class="form-control" id="position" value="${this.value.position}" placeholder="${this.value.position}" name="position">
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		`;
	}
}

export class InfoBlock extends Block {
	constructor(value, options, targetModal) {
		super(value, options);
		this.targetModal = targetModal;
	}
	toHtml() {
		let html = `<div class="sidebar__info info">`;
		Object.entries(this.value).forEach(([key, val]) => {
			html += `
				<div class="info__box" data-bs-toggle="modal" data-bs-target="#${this.targetModal + key}">
					<div class="info__title">
						<h5>${val.title}</h5>
					</div>
					<div class="info__text">
						${Array.isArray(val.text) ? val.text.join("<br>") : val.text}
					</div>
					${this.editor}
				</div>
			`;
		});
		html += `</div>`;
		return html;
	}

	renderModal(){
		let html = '';
		Object.entries(this.value).forEach(([key, val]) => {
			html += `
				<div class="modal fade" id="${
					this.targetModal + key
				}" tabindex="-1" aria-labelledby="${
				this.targetModal + key
			}Label" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<form id="${this.targetModal}">
								<div class="modal-header">
									<h5 class="modal-title" id="${this.targetModal}Label">${val.title}</h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<div class="mb-3">
										<label for="formControl${
											this.targetModal
										}" class="form-label">Example textarea</label>
										<textarea class="form-control" id="formControl${
											this.targetModal
										}" rows="3"></textarea>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			`;
		});
		return html;
	}
}
