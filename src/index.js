import { model } from "./models/model";
import "./styles/style.css";
import { templates } from "./templates";

const $site = document.querySelector('#site');

model.forEach(block => {
	const toHtml = templates[block.type];
	if(toHtml) {
		$site.insertAdjacentHTML('beforeend', toHtml(block));
	}
})
