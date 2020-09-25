function header() {
    const headerContainer = document.createElement('div')
    headerContainer.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = 'Pizza Time'

    const nav = document.createElement('div');
    nav.classList.add('nav');
    nav.innerHTML =`<li><a href="">Home</a></li>
    <li><a href="">Menu</a></li>
    <li><a href="">Contact</a></li>`
    
    headerContainer.appendChild(logo);
    headerContainer.appendChild(nav);

    return headerContainer
}

export default header;