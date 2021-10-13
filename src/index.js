// import { model } from "./models/model";
// import "./styles/style.css";
// import { templates } from "./templates";

// const $site = document.querySelector('#site');

// model.forEach(block => {
// 	const toHtml = templates[block.type];
// 	if(toHtml) {
// 		$site.insertAdjacentHTML('beforeend', toHtml(block));
// 	}
// })

const model = [
	{type: 'title', value: 'hello world JS'},
	{type: 'text', value: 'Here we go with some text'},
	{type: 'columns', value: [
		'1111111',
		'2222222',
		'3333333'
	]}
]
const $site = document.querySelector('#site');

model.forEach(block => {
	let html = '';
	if(block.type === 'title') {
		html = `
			<div class="row">
				<div class="col-sm">
					<h1>${block.value}</h1>
				</div>
			</div>
		`;
	} else if(block.type === 'text') {
		html = `
			<div class="row">
				<div class="col-sm">
					<p>${block.value}</p>
				</div>
			</div>
		`;
	} else if (block.type === "columns") {

	}
	$site.insertAdjacentHTML('beforeend', html);
})