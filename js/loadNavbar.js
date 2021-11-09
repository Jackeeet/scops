const links = [
{name: 'Создать', addr:'obs/step1.html'},
{name: 'Наблюдения', addr:'obs/observations.html'},
{name: 'События', addr:'evs/events.html'},
{name: 'Птицы', addr:'exs/birds.html'}
]

function createLink(linkData, className, container){
    let link = document.createElement('a');
    link.classList.add(className);
    link.setAttribute('href', linkData.addr);
    link.innerText = linkData.name;
    container.appendChild(link);
}

function createButtons(buttonContainer) {
    register = document.createElement('button');
    register.type = 'button';
    register.classList.add('btn', 'btn-warning');
    register.innerHTML = 'Регистрация';
    register.setAttribute('id', 'registerButton');
    buttonContainer.appendChild(register);

    login = document.createElement('button');
    login.type = 'button';
    login.classList.add('btn', 'me-2');
    login.innerHTML = 'Вход';
    login.setAttribute('id', 'loginButton');
    buttonContainer.appendChild(login);
}

function fillNavbar(userAuthorised) {
    let bar = document.getElementById('nav');
    let container = document.createElement('div');
    container.classList.add('container-fluid');

    let linksContainer = document.createElement('div');
    linksContainer.classList.add('d-flex');

    // createLink({name:'SCOPS', addr:'/'}, 'navbar-brand', linksContainer);
    createLink({name:'SCOPS', addr:''}, 'navbar-brand', linksContainer);

    let linkList = document.createElement('ul');
    linkList.classList.add('nav');
    links.forEach(link => createLink(link, 'nav-link', linkList));
    linksContainer.appendChild(linkList);
    container.appendChild(linksContainer);

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('text-end');

    if (userAuthorised) {
        // user profile link here
    }
    else {
        createButtons(buttonContainer);
    }
    container.appendChild(buttonContainer);
    bar.appendChild(container);
}

let register, login;
fillNavbar(false);
register.onclick = () => location.href = 'usr/register.html';
login.onclick = () => location.href = 'usr/login.html';
