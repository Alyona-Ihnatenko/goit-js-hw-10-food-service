import './sass/main.scss';
import menu from "./menu.json";
import menuTpl from '../template/menuTpl.hbs';


const menuRef = document.querySelector('.js-menu');
const markupMenu= menuTpl(menu);
menuRef.insertAdjacentHTML('beforeend',markupMenu);


const toggle=document.querySelector('#theme-switch-toggle');
 const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  }

  toggle.addEventListener('change',handlerDarkTheme);

  function handlerDarkTheme(event){
    event.preventDefault();
    if(localStorage.getItem('Theme')==='dark-theme'){
         localStorage.setItem('Theme','light-theme');
    
     }
     else{
        localStorage.setItem('Theme','dark-theme');
     }
     addDarkTheme()
    }

     function addDarkTheme(){
   
           if(localStorage.getItem('Theme')==='dark-theme'){
               document.querySelector('body').classList.add('dark-theme');
               toggle.setAttribute('checked',true) ;

            }
         else{
               document.querySelector('body').classList.remove('dark-theme');  
           }
        
     }
     addDarkTheme()
   
    
     