// mobile menu code
const hamburgerBtn = document.querySelector('.hamburgerBtn');
const menu = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('#close-menu');
const menuOptions = menu.getElementsByTagName('li');
//

hamburgerBtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
  menu.classList.toggle('visible');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('visible');
  menu.classList.toggle('hidden');
});

for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', () => {
    menu.classList.remove('visible');
    menu.classList.toggle('hidden');
  });
}

// add projects dynamically

// project objects for data storage
const works = {
  project1: {
    img: './assets/images/project-1.png',
    title: 'Tonic',
    details: [
      'CANOPY', 'Back End Dev', '2015',
    ],
    body: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stack: [
      'HTML', 'CSS', 'Javascript',
    ],
  },
  project2: {
    img: './assets/images/project-2.png',
    title: 'Multi-Post Stories',
    details: [
      'CANOPY', 'Back End Dev', '2015',
    ],
    body: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stack: [
      'HTML', 'CSS', 'Javascript',
    ],
  },
  project3: {
    img: './assets/images/project-3.png',
    title: 'Tonic',
    details: [
      'CANOPY', 'Back End Dev', '2015',
    ],
    body: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stack: [
      'HTML', 'CSS', 'Javascript',
    ],
  },
  project4: {
    img: './assets/images/project-4.png',
    title: 'Multi-Post Stories',
    details: [
      'CANOPY', 'Back End Dev', '2015',
    ],
    body: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stack: [
      'HTML', 'CSS', 'Javascript',
    ],
  },
};

const workContainer = document.querySelector('.work');
const projectKeys = Object.keys(works);
const projectValues = Object.values(works);

for (let j = 0; j <= projectKeys.length; j += 1) {
  if (Object.prototype.hasOwnProperty.call(projectValues, j)) {
    const projectSection = document.createElement('section');
    projectSection.setAttribute('class', 'project');
    const imgContainer = document.createElement('div');
    imgContainer.setAttribute('class', 'img-container');
    const projectImg = document.createElement('img');
    projectImg.setAttribute('src', projectValues[j].img);
    projectImg.setAttribute('class', 'project-img');
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class', 'main-container');
    const title = document.createElement('h3');
    title.setAttribute('class', 'project-title');
    title.textContent = projectValues[j].title;
    const projectDetails = document.createElement('div');
    projectDetails.setAttribute('class', 'project-details');
    const projectDetailsList = document.createElement('ul');
    for (let i = 0; i < projectValues[j].details.length; i += 1) {
      const list = document.createElement('li');
      list.textContent = projectValues[j].details[i];
      projectDetailsList.appendChild(list);
    }
    projectDetails.appendChild(projectDetailsList);
    const bodyContent = document.createElement('p');
    bodyContent.textContent = projectValues[j].body;
    const stackList = document.createElement('ul');
    stackList.setAttribute('class', 'project-tech-stack');
    for (let i = 0; i < projectValues[j].stack.length; i += 1) {
      const list = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = projectValues[j].stack[i];
      list.appendChild(a);
      stackList.appendChild(list);
    }
    const seeProjectBtn = document.createElement('a');
    seeProjectBtn.setAttribute('class', 'btn');
    seeProjectBtn.setAttribute('href', '#');
    seeProjectBtn.textContent = 'See project';
    projectSection.appendChild(imgContainer);
    imgContainer.appendChild(projectImg);
    projectSection.appendChild(mainContainer);
    mainContainer.appendChild(title);
    mainContainer.appendChild(projectDetails);
    mainContainer.appendChild(bodyContent);
    mainContainer.appendChild(stackList);
    mainContainer.appendChild(seeProjectBtn);
    workContainer.appendChild(projectSection);
  }
}

// for (const project in works) {
//   if (Object.hasOwn(works, project)) {
//     const projectSection = document.createElement('section');
//     projectSection.setAttribute('class', 'project');
//     const imgContainer = document.createElement('div');
//     imgContainer.setAttribute('class', 'img-container');
//     const projectImg = document.createElement('img');
//     projectImg.setAttribute('src', works[project].img);
//     projectImg.setAttribute('class', 'project-img');
//     const mainContainer = document.createElement('div');
//     mainContainer.setAttribute('class', 'main-container');
//     const title = document.createElement('h3');
//     title.setAttribute('class', 'project-title');
//     title.textContent = works[project].title;
//     const projectDetails = document.createElement('div');
//     projectDetails.setAttribute('class', 'project-details');
//     const projectDetailsList = document.createElement('ul');
//     for (let i = 0; i < works[project].details.length; i += 1) {
//       const list = document.createElement('li');
//       list.textContent = works[project].details[i];
//       projectDetailsList.appendChild(list);
//     }
//     projectDetails.appendChild(projectDetailsList);
//     const bodyContent = document.createElement('p');
//     bodyContent.textContent = works[project].body;
//     const stackList = document.createElement('ul');
//     stackList.setAttribute('class', 'project-tech-stack');
//     for (let i = 0; i < works[project].stack.length; i += 1) {
//       const list = document.createElement('li');
//       const a = document.createElement('a');
//       a.textContent = works[project].stack[i];
//       list.appendChild(a);
//       stackList.appendChild(list);
//     }
//     const seeProjectBtn = document.createElement('a');
//     seeProjectBtn.setAttribute('class', 'btn');
//     seeProjectBtn.setAttribute('href', '#');
//     seeProjectBtn.textContent = 'See project';
//     projectSection.appendChild(imgContainer);
//     imgContainer.appendChild(projectImg);
//     projectSection.appendChild(mainContainer);
//     mainContainer.appendChild(title);
//     mainContainer.appendChild(projectDetails);
//     mainContainer.appendChild(bodyContent);
//     mainContainer.appendChild(stackList);
//     mainContainer.appendChild(seeProjectBtn);
//     workContainer.appendChild(projectSection);
//   }
// }

// project detail modal
const projects = workContainer.getElementsByClassName('project');
const modal = document.querySelector('.modal-container');

for (let i = 0; i < projects.length; i += 1) {
  const projectBtn = projects[i].getElementsByClassName('btn');

  projectBtn[0].addEventListener('click', () => {
    modal.classList.remove('hiddenModal');
    modal.classList.toggle('showModal');
    document.querySelector('.bg-blur').style.display = 'block';
    modal.getElementsByTagName('h3')[0].textContent = projects[i].getElementsByTagName('h3')[0].textContent;
    modal.getElementsByClassName('project-img')[0].setAttribute('src', projects[i].getElementsByClassName('project-img')[0].getAttribute('src'));
    modal.getElementsByClassName('description')[0].textContent = projects[i].getElementsByTagName('p')[0].textContent;
    const projectStack = projects[i].getElementsByClassName('project-tech-stack')[0];

    const modalProjectStack = modal.getElementsByClassName('project-tech-stack')[0];

    modalProjectStack.innerHTML = '';

    for (let i = 0; i < projectStack.getElementsByTagName('li').length; i += 1) {
      const content = projectStack.getElementsByTagName('li')[i].getElementsByTagName('a')[0].textContent;

      const a = document.createElement('a');
      a.textContent = content;
      const li = document.createElement('li');
      li.appendChild(a);

      modalProjectStack.appendChild(li);
    }

    modal.getElementsByClassName('close-modal')[0].addEventListener('click', () => {
      modal.classList.remove('showModal');
      modal.classList.toggle('hiddenModal');
      document.querySelector('.bg-blur').style.display = 'none';
    });
  });
}
