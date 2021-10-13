import {css} from './utils'
function image(item) {
	return `
		<div class="image-container">
			<div class="image-container__img">
				<img src="${item.value}" alt="my photo" class="img-fluid">
			</div>
		</div>
	`;
}

function title(item) {
	const styles = css(item.options.styles);

	return `
		<div class="sidebar__title title">
			<h1 class="title__name" style="${styles}">${item.value.name}</h1>
			<h4 class="title__position">${item.value.position}</h4>
		</div>
		<div class="sidebar__line"></div>
	`;
}
function info(item) {
	let html = `<div class="sidebar__info info">`;
	Object.entries(item.value).forEach(([key, val]) => {
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

export const templates = {
	image,
	title,
	info
};
