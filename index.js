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
let works = {
  project1: {
    img: "./assets/images/project-1.png",
    title: "Tonic",
    details: [
      "CANOPY","Back End Dev","2015"
    ],
    body: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    stack: [
      "HTML","CSS","Javascript"
    ]
  },
  project2: {
    img: "./assets/images/project-2.png",
    title: "Multi-Post Stories",
    details: [
      "CANOPY","Back End Dev","2015"
    ],
    body: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    stack: [
      "HTML","CSS","Javascript"
    ]
  },
  project3: {
    img: "./assets/images/project-3.png",
    title: "Tonic",
    details: [
      "CANOPY","Back End Dev","2015"
    ],
    body: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    stack: [
      "HTML","CSS","Javascript"
    ]
  },
  project4: {
    img: "./assets/images/project-4.png",
    title: "Multi-Post Stories",
    details: [
      "CANOPY","Back End Dev","2015"
    ],
    body: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    stack: [
      "HTML","CSS","Javascript"
    ]
  }
};

let workContainer = document.querySelector(".work");

for (const project in works)
{
 let projectSection = document.createElement("section");
 projectSection.setAttribute("class","project");
 let imgContainer = document.createElement("div");
 imgContainer.setAttribute("class","img-container");
 let projectImg = document.createElement("img");
 projectImg.setAttribute("src",works[project].img);
 projectImg.setAttribute("class","project-img");
 let mainContainer = document.createElement("div");
 mainContainer.setAttribute("class","main-container");
 let title = document.createElement("h3");
 title.setAttribute("class","project-title");
 title.textContent = works[project].title;
 let projectDetails = document.createElement("div");
 projectDetails.setAttribute("class","project-details");
 let projectDetailsList = document.createElement("ul");
 for (let i = 0; i < works[project].details.length; i++)
 {
  let list = document.createElement("li");
  list.textContent = works[project].details[i];
  projectDetailsList.appendChild(list);
 }
 projectDetails.appendChild(projectDetailsList);
 let bodyContent = document.createElement("p");
 bodyContent.textContent = works[project].body;
 let stackList = document.createElement("ul");
 stackList.setAttribute("class","project-tech-stack");
 for (let i = 0; i < works[project].stack.length; i++)
 {
  let list = document.createElement("li");
  let a = document.createElement("a");
  a.textContent = works[project].stack[i];
  list.appendChild(a);
  stackList.appendChild(list);
 }
 let seeProjectBtn = document.createElement("a");
 seeProjectBtn.setAttribute("class","btn");
 seeProjectBtn.setAttribute("href","#");
 seeProjectBtn.textContent = "See project";
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

// project detail modal
let projects = workContainer.getElementsByClassName('project');
let modal = document.querySelector('.modal-container');

for (let i = 0; i < projects.length; i++)
{
  let projectBtn = projects[i].getElementsByClassName('btn');
  
  projectBtn[0].addEventListener('click', () => {
    modal.classList.remove('hiddenModal');
    modal.classList.toggle('showModal');
    document.querySelector('.bg-blur').style.display = "block";
    modal.getElementsByTagName('h3')[0].textContent = projects[i].getElementsByTagName('h3')[0].textContent;
    modal.getElementsByClassName('project-img')[0].setAttribute("src",projects[i].getElementsByClassName("project-img")[0].getAttribute('src'));
    modal.getElementsByClassName('description')[0].textContent = projects[i].getElementsByTagName('p')[0].textContent;
    let project_stack = projects[i].getElementsByClassName('project-tech-stack')[0];
    
    let modal_project_stack = modal.getElementsByClassName('project-tech-stack')[0];
    
    
    modal_project_stack.innerHTML = "";
    console.log(project_stack.getElementsByTagName('li')[0].getElementsByTagName('a')[0]);
    for (let i = 0; i < project_stack.getElementsByTagName('li').length; i++)
    {
      let content = project_stack.getElementsByTagName('li')[i].getElementsByTagName('a')[0].textContent;
      
      let a = document.createElement('a');
      a.textContent = content;
      let li = document.createElement('li');
      li.appendChild(a);
      
      modal_project_stack.appendChild(li);
    }
    

    console.log(modal_project_stack);
    modal.getElementsByClassName('close-modal')[0].addEventListener('click', () => {
      modal.classList.remove('showModal');
      modal.classList.toggle('hiddenModal');
      document.querySelector('.bg-blur').style.display = "none";
    });
   
  });
}



