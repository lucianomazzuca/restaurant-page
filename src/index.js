import header from './modules/header';
import home from './modules/home';
import contact from './modules/contact'
import menu from './modules/menu'
import './style.css';


(function show(){
    const content = document.querySelector('#content');

    //home
    content.appendChild(header());
    content.appendChild(home());


    function deletePage() {
        content.removeChild(content.lastChild)
    }

    //Bind menu
    const navHome = document.querySelectorAll('li');
    navHome.forEach(item => {
        item.addEventListener('click', showHome);
    })

    function showHome() {
        deletePage();

        if(this.id == 'contact'){
            content.appendChild(contact());
        } 
        else if(this.id == 'home'){
            content.appendChild(home());
        } else {
            content.appendChild(menu())
        }
    }
    
})();
