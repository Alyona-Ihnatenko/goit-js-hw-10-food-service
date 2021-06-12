import './sass/main.scss';
import menu from "./menu.json";
import menuTpl from '../template/menuTpl.hbs';


const menuRef = document.querySelector('.js-menu');
const markupMenu= menuTpl(menu);
menuRef.insertAdjacentHTML('beforeend',markupMenu);



