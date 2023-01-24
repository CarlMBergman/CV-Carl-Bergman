import { addClickCV } from "../script.js"


const cvSection = document.querySelector('#CV')

function displayWork(work) {
    const elem = `
    <div id="work-page">
        <h2>${work.data().companyName}</h2>
        <h3>${work.data().date}</h3>
        <p>${work.data().description}</p>
        <img src="${work.data().img}" alt="${work.data().img}">
        <button id="close-work">STÄNG FÖNSTRET</button>
    </div>
    `

    cvSection.insertAdjacentHTML('afterbegin', elem)
    closeWork()
}

function closeWork() {
    const closeBtn = document.querySelector('#close-work')
    const workDiv = document.querySelector('#work-page')
    closeBtn.addEventListener('click', () => {
        workDiv.remove();
        addClickCV();
    })
}
export { displayWork }