function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `
    <h1>Menu</h1>
    `

    const platesContainer = document.createElement('div');
    platesContainer.classList.add('plates-container');

    const plate = document.createElement('div');
    plate.classList.add('plate');

    const plateImg = document.createElement('img');
    plateImg.src = '/src/images/napolitana.jpg'
    const plateName = document.createElement('div');
    plateName.classList.add('plate-name');
    plateName.innerText = 'Napolitana'
    
    plate.appendChild(plateImg);
    plate.appendChild(plateName);

    menu.appendChild(plate);

    return menu;
}

export default menu;