const form = document.getElementById('main-form');
const btnListOS = document.getElementById('btnListOS');
const displayOS = document.getElementById('display-OS');

// Armazena as ordens de serviço
let usersOS = [];

// Popula o array de usuários OS
function addUsersOs(name, sector, email, problem) {
    usersOS.push({name, sector, email, problem});
}

// Recolhe e adiciona os dados do usuário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const sector = document.getElementById('sector').value;
    const email = document.getElementById('email').value;
    const problem = document.getElementById('problem').value;

    addUsersOs(name, sector, email, problem);
    form.reset();
    console.log(usersOS);
})

function displayNewOs() {
    displayOS.innerHTML = '';
    usersOS.forEach((user, index) => {
        const userOs = `
            <div class="listOS-item">
                <h4>${user.name}</h4>
                <p>${user.sector}</p>
                <p>${user.email}</p>
                <p>${user.problem}</p>
                <button onclick="removeUserOs(${index})">Excluir OS</button>
            </div>
        `
        displayOS.insertAdjacentHTML('beforeend', userOs);
    })
}

// Exibe as OS abertas quando clicado no botão listar
btnListOS.addEventListener('click', () => {
    displayNewOs();
})

// Remove usuário que abriram OS
function removeUserOs(index) {
    usersOS.splice(index, 1);
    displayNewOs();
}