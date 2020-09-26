function header() {
    const headerContainer = document.createElement('div')
    headerContainer.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = 'Pizza Time'

    const nav = document.createElement('div');
    nav.classList.add('nav');
    nav.innerHTML = `
    <li id = 'home'>Home</li>
    <li id = 'menu'>Menu</li>
    <li id = 'contact'>Contact</li>`
    
    headerContainer.appendChild(logo);
    headerContainer.appendChild(nav);

    return headerContainer
}

export default header;