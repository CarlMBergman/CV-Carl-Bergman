import { getWork } from './modules/firebaseConfig.js';
import { displayWork } from './modules/display.js'
const cvBtns = document.querySelectorAll('button')


function reveal() {
  const reveals = document.querySelectorAll('article');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

async function getCV(event) {
  const selectedWork = event.target.getAttribute('data-id');
      console.log(selectedWork);
      const work = await getWork(selectedWork)
      console.log(work.data().date);
      displayWork(work);
      removeClickCV()
}

function addClickCV() {
  cvBtns.forEach((btn) => {
    btn.addEventListener('click', getCV)
  })
}
addClickCV()

function removeClickCV() {
  cvBtns.forEach((btn) => {
    btn.removeEventListener('click', getCV)
  })
}


export { addClickCV }