import { Site } from './classes/site';
import {model} from './models/model';
import './styles/style.css';

const sidebar = new Site('#sidebar');
sidebar.render(model);

