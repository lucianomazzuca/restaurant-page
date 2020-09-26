function home() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home');

    const banner = document.createElement('div');
    banner.classList.add('banner');
    const imgBanner = document.createElement('img');
    imgBanner.src = '/src/images/pizza.jpg'
    banner.appendChild(imgBanner);

    const about = document.createElement('div');
    about.classList.add('about');
    about.innerHTML = `
    <h2>About us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    `

    homeContainer.appendChild(banner);
    homeContainer.appendChild(about);
    return homeContainer;
}

export default home;