import { Modals } from './classes/Modals';
import { Editor } from './classes/Editor'
import { Site } from './classes/site';
import {model} from './models/model';
import './styles/style.css';

//RENDER SIDEBAR
//update sidebar
const updateCallBack = newBlock => {
	model.map(element => {
		if(element.constructor.name === newBlock.constructor.name) {
			element.value.name = newBlock.value.name;
		}
	})
	console.log(model);
	sidebar.render(model);
	console.log('render from update');
}
//find #sidebar
const sidebar = new Site("#sidebar", updateCallBack);
//Display all blocks of sidebar : ImageBlock, TitleBlock, InfoBlock
sidebar.render(model);


//RENDER MODALS OF SIDEBAR
//find #modals
const modals = new Modals('#modals');
//Display all modals of sidebar : ImageModal, TitleModal, InfoModal
modals.render(model);






const s = new Editor("#sidebar", updateCallBack);

