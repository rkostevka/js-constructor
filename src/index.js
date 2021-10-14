import {model} from './models/model';
import './styles/style.css';

const $sidebar = document.querySelector("#sidebar");
model.forEach(item => {
	$sidebar.insertAdjacentHTML("beforeend", item.toHtml());
})
