import {model} from './models/model';
import {templates} from './templates';
import './styles/style.css';

const $sidebar = document.querySelector("#sidebar");
model.forEach(item => {
	const toHtml = templates[item.type];
	if(toHtml) {
		$sidebar.insertAdjacentHTML("beforeend", toHtml(item));
	}
})
