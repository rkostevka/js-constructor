import { row, col } from "./utils";

function title(block) {
	const {tag = 'h1', styles} = block.options;
	return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

function text(block) {
	return row(col(`<p>${block.value}</p>`));
}

function columns(block) {
	const html = block.value.map((item) => col(item));
	return row(html.join(""));
}

function image(block) {
	return row(`<img src="${block.value}" />`);
}

export const templates = {
	title,
	text,
	columns,
	image,
};
