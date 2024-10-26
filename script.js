const form = document.getElementById('main-form');
const btnListOS = document.getElementById('btnListOS');
const displayOS = document.getElementById('display-OS');
const updateOS = document.querySelector('.update-users-os');

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
})

function displayNewOs() {
    displayOS.innerHTML = '';
    const tableHeader = `
        <tr class="has-header">
            <th>Nome</th>
            <th>Setor</th>
            <th>E-mail</th>
            <th>Problema</th>
            <th>Excluir OS</th>
            <th>Atualizar OS</th>
        </tr>
    `;

    usersOS.forEach((user, index) => {
        const userOs = `
            <tr class="listOS-item">
                <td>${user.name}</td>
                <td>${user.sector}</td>
                <td>${user.email}</td>
                <td>${user.problem}</td>
                <td><button class="btn btn-danger" onclick="removeUserOs(${index})">Excluir</button></td>
                <td><button class="btn btn-success" onclick="updateUserOs(${index})">Atualizar</button></td>
            </tr>
        `
        displayOS.insertAdjacentHTML('beforeend', userOs);

        if(!document.querySelector('.has-header')){
            displayOS.querySelector('.listOS-item').insertAdjacentHTML('beforebegin', tableHeader);
        }
    })

    usersOS.length > 0 ? displayOS.classList.remove('hidden') : displayOS.classList.add('hidden');
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

// Atualiza os dados
function updateUserOs(index) {
    updateOS.classList.toggle('hidden');
    usersOS.length === 0 ? updateOS.classList.add('hidden') : null;

    updateOS.addEventListener('submit', (e) => {
        e.preventDefault();
        const updateName = document.getElementById('updateName').value;
        const updateSector = document.getElementById('updateSector').value;
        const updateEmail = document.getElementById('updateEmail').value;
        const updateProblem = document.getElementById('updateProblem').value;

        usersOS.forEach((user, i) => {
            if(i == index){
                updateName != '' ? user.name = updateName : null;
                updateSector != '' ? user.sector = updateSector : null;
                updateEmail != '' ? user.email = updateEmail : null;
                updateProblem != '' ? user.problem = updateProblem : null;

                displayNewOs();
                updateOS.classList.toggle('hidden');
            }
        })
        // displayOS.classList.toggle('hidden');
    })
}