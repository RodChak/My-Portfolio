// Portfolio: mobile menu
const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu_bar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuBar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuBar.classList.remove('active');
}));

// Portfolio: details popup window

const projects = [
  {
    title: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/Snapshot5.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootsraps'],
    See_Live: '#',
    Source: '#',
  },
  {
    title: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/Snapshot4.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    See_Live: '#',
    Source: '#',
  },
  {
    title: 'Facebook 360',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/Snapshot1.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    See_Live: '#',
    Source: '#',
  },
  {
    title: 'Uber Navigation',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/Snapshot2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    See_Live: '#',
    Source: '#',
  },
];

document.getElementById('Works_Section').innerHTML = `
<div class="card card_1">
  <img class="Snapshoot_Portfolio_1 mobile" src="./images/Snapshot1.png" alt="Snapshoot_Portfolio_1">
  <img class="Snapshoot_Portfolio_4 desktop" src= ${projects[0].image} alt="Snapshoot_Portfolio_5">
  <div class="work_cards">
    <h2>${projects[0].title}</h2>
    <div class="frame">
      <ul>
          <li class="canopy">CANOPY</li>
          <li class="separator"></li>
          <li>Back End Dev</li>
          <li class="separator"></li>
          <li>2015</li>
      </ul>
    </div>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    <div class="tags">
      <ul>
          <li><a>${projects[0].technologies[0]}</a></li>
          <li><a>${projects[0].technologies[1]}</a></li>
          <li><a>${projects[0].technologies[2]}</a></li>
      </ul>
    </div>
    <div data-modal-target="#modal" id="project1" class="seebutton0">
          <button type="button">See Project</button>
    </div>
  </div>


  <div id = "modal" class="modal">
    <div class="projectheader">
      <div id="modaltitle" class="modaltitle">${projects[0].title}</div>
      <button data-close-button class="closebutton">&times;</button>
    </div>
    <div id="modalframe" class="frame">
      <ul>
        <li class="canopy">CANOPY</li>
        <li class="separator"></li>
        <li>Back End Dev</li>
        <li class="separator"></li>
        <li>2015</li>
      </ul>
    </div>
    <div class="featuredimage">
      <img src= ${projects[0].image} alt="project_image" class="project-image-desktop" id="project-image-desktop">
    </div>
    <div class="projectbody">
      <div id="modal-supporting-text">
        <p>${projects[0].description}</p>
      </div>
      <div class="right-block">
        <div></div>
        <div id="modaltags1" class="modaltags1">
          <ul class="flex-wrap">
            <li><a>${projects[0].technologies[0]}</a></li>
            <li><a>${projects[0].technologies[1]}</a></li>
            <li><a>${projects[0].technologies[2]}</a></li>
            <li><a>${projects[0].technologies[3]}</a></li>
            <li><a>${projects[0].technologies[4]}</a></li>
            <li><a>${projects[0].technologies[5]}</a></li>
          </ul>
        </div>
        <div id ="modalbottombuttons">
          <button class="seelive">See live <img class="seelive_icon" src="./images/seelive.svg" alt="seelive_icon"></button>
          <button class="seesource">See Source <img class="seeSource" src="./images/seeSource.svg" alt="seesource_icon"></button>
        </div>
      </div>
    </div>
  </div>
  <div id="backdrop"></div>
</div>

<div class="card card_2">
  <img class="Snapshoot_Portfolio_2 mobile" src="./images/Snapshot2.png" alt="Snapshoot_Portfolio_2">
  <img class="Snapshoot_Portfolio_4 desktop" src = ${projects[1].image} alt="Snapshoot_Portfolio_6">
  <div class="work_cards">
      <h2>${projects[1].title}</h2>
      <div class="frame mobile">
          <ul>
              <li class="canopy">CANOPY</li>
              <li class="separator"></li>
              <li>Back End Dev</li>
              <li class="separator"></li>
              <li>2015</li>
          </ul>
      </div>
      <div class="frame desktop">
          <ul>
              <li class="canopy">FACEBOOK</li>
              <li class="separator"></li>
              <li>Full Stack Dev</li>
              <li class="separator"></li>
              <li>2015</li>
          </ul>
      </div>
      <p class="mobile">A daily selection of privately personalized reads; no accounts or sign-ups
          required.</p>
      <p class="desktop">Experimental content creation feature that allows users to add to an existing
          story over the course of a day without spamming their friends.</p>
      <div class="tags">
          <ul>
              <li><a>${projects[0].technologies[0]}</a></li>
              <li class = "tags desktop"><a>${projects[1].technologies[1]}</a></li>
              <li><a>${projects[1].technologies[1]}</a></li>
              <li><a>${projects[1].technologies[2]}</a></li>
          </ul>
      </div>
      <div data-modal-target="#modal" id="project2" class="seebutton1">
          <button type="button">See Project</button>
      </div>
  </div>
</div>


<div class="card card_3">
  <img class="Snapshoot_Portfolio_3 mobile" src="./images/Snapshot3.png" alt="Snapshoot_Portfolio_3">
  <img class="Snapshoot_Portfolio_4 desktop" src=${projects[2].image} alt="Snapshoot_Portfolio_7">
  <div class="work_cards">
      <h2 class="mobile">Tonic</h2>
      <h2 class="desktop">${projects[2].title} </h2>
      <div class="frame mobile">
          <ul>
              <li class="canopy">CANOPY</li>
              <li class="separator"></li>
              <li>Back End Dev</li>
              <li class="separator"></li>
              <li>2015</li>
          </ul>
      </div>
      <div class="frame desktop">
          <ul>
              <li class="canopy">FACEBOOK</li>
              <li class="separator"></li>
              <li>Full Stack Dev</li>
              <li class="separator"></li>
              <li>2015</li>
          </ul>
      </div>
      <p class="mobile">A daily selection of privately personalized reads; no accounts or sign-ups
          required.</p>
      <p class="desktop">Exploring the future of media in Facebook's first Virtual Reality app; a place to
          discover and enjoy 360 photos and videos on Gear VR.</p>
      <div class="tags">
          <ul>
              <li><a>${projects[2].technologies[0]}</a></li>
              <li class="tag desktop"><a>${projects[2].technologies[1]}</a></li>
              <li><a>${projects[2].technologies[2]}</a></li>
              <li><a>${projects[2].technologies[3]}</a></li>
          </ul>
      </div>
      <div data-modal-target="#modal" id="project3" class="seebutton2">
          <button type="button">See Project</button>
      </div>
  </div>
</div>


<div class="card card_4">
<img class="Snapshoot_Portfolio_4 mobile" src="./images/Snapshot4.png" alt="Snapshoot_Portfolio_4">
<img class="Snapshoot_Portfolio_4 desktop" src=${projects[3].image} alt="Snapshoot_Portfolio_8">
<div class="work_cards">
    <h2 class="mobile">Multi-Post Stories</h2>
    <h2 class="desktop">${projects[3].title}</h2>
    <div class="frame mobile">
        <ul>
            <li class="canopy">CANOPY</li>
            <li class="separator"></li>
            <li>Back End Dev</li>
            <li class="separator"></li>
            <li>2015</li>
        </ul>
    </div>
    <div class="frame desktop">
        <ul>
            <li class="canopy">Uber</li>
            <li class="separator"></li>
            <li>Lead Developer</li>
            <li class="separator"></li>
            <li>2018</li>
        </ul>
    </div>
    <p class="mobile">A daily selection of privately personalized reads; no accounts or sign-ups
        required.</p>
    <p class="desktop">A smart assistant to make driving more safe, efficient, and fun by unlocking your
        most expensive computer: your car.</p>
    <div class="tags">
        <ul>
            <li><a>${projects[3].technologies[0]}</a></li>
            <li class="tags desktop"><a>${projects[3].technologies[1]}</a></li>
            <li><a>${projects[3].technologies[2]}</a></li>
            <li><a>${projects[3].technologies[3]}</a></li>
        </ul>
    </div>
    <div data-modal-target="#modal" id="project4" class="seebutton3">
          <button type="button">See Project</button>
      </div>
</div>
</div>
`;

// code for apearing and disapearing of modal
const openButton = document.querySelectorAll('[data-modal-target]');
const closeButton = document.querySelectorAll('[data-close-button]');
const backdrop = document.getElementById('backdrop');

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  backdrop.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  backdrop.classList.remove('active');
}

openButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

backdrop.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

openButton.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.currentTarget.classList[0] === 'seebutton0') {
      document.getElementById('project-image-desktop').src = projects[0].image;
      document.getElementById('modaltitle').innerHTML = projects[0].title;
      document.getElementById('modalbottombuttons').innerHTML = `
        <button action="${projects[0].See_Live}" type="submit" class="seelive">See Live <img class="seelive_icon" src="./images/seelive.svg" alt="seelive_icon"></button>
        <button action="${projects[0].Source}" type="submit" class="seesource">See Source <img class="seeSource" src="./images/seeSource.svg" alt="seesource_icon"></button>`;
      document.getElementById('modaltags1').innerHTML = `
        <ul class="flex-wrap">
        <li><a>${projects[0].technologies[0]}</a></li>
        <li><a>${projects[0].technologies[1]}</a></li>
        <li><a>${projects[0].technologies[2]}</a></li>
        <li><a>${projects[0].technologies[3]}</a></li>
        <li><a>${projects[0].technologies[4]}</a></li>
        <li><a>${projects[0].technologies[5]}</a></li>
        </ul>`;
      document.getElementById('modal-supporting-text').innerHTML = projects[0].description;
    } else if (event.currentTarget.classList[0] === 'seebutton1') {
      document.getElementById('project-image-desktop').src = projects[1].image;
      document.getElementById('modaltitle').innerHTML = projects[1].title;
      document.getElementById('modalbottombuttons').innerHTML = `
        <button action="${projects[1].See_Live}" type="submit" class="seelive">See Live <img class="seelive_icon" src="./images/seelive.svg" alt="seelive_icon"></button>
        <button action="${projects[1].Source}" type="submit" class="seesource">See Source <img class="seeSource" src="./images/seeSource.svg" alt="seesource_icon"></button>`;
      document.getElementById('modaltags1').innerHTML = `
        <ul class="flex-wrap">
        <li><a>${projects[1].technologies[0]}</a></li>
        <li><a>${projects[1].technologies[1]}</a></li>
        <li><a>${projects[1].technologies[2]}</a></li>
        <li><a>${projects[1].technologies[3]}</a></li>
        <ul>`;
      document.getElementById('modal-supporting-text').innerHTML = projects[1].description;
    } else if (event.currentTarget.classList[0] === 'seebutton2') {
      document.getElementById('project-image-desktop').src = projects[2].image;
      document.getElementById('modaltitle').innerHTML = projects[2].title;
      document.getElementById('modalbottombuttons').innerHTML = `
        <button action="${projects[2].See_Live}" type="submit" class="seelive">See Live <img class="seelive_icon" src="./images/seelive.svg" alt="seelive_icon"></button>
        <button action="${projects[2].Source}" type="submit" class="seesource">See Source <img class="seeSource" src="./images/seeSource.svg" alt="seesource_icon"></button>`;
      document.getElementById('modaltags1').innerHTML = `
        <ul class="flex-wrap">
        <li><a>${projects[2].technologies[0]}</a></li>
        <li><a>${projects[2].technologies[1]}</a></li>
        <li><a>${projects[2].technologies[2]}</a></li>
        <li><a>${projects[2].technologies[3]}</a></li>
        <ul>`;
      document.getElementById('modal-supporting-text').innerHTML = projects[2].description;
    } else if (event.currentTarget.classList[0] === 'seebutton3') {
      document.getElementById('project-image-desktop').src = projects[3].image;
      document.getElementById('modaltitle').innerHTML = projects[3].title;
      document.getElementById('modalbottombuttons').innerHTML = `
        <button action="${projects[3].See_Live}" type="submit" class="seelive">See Live <img class="seelive_icon" src="./images/seelive.svg" alt="seelive_icon"></button>
        <button action="${projects[3].Source}" type="submit" class="seesource">See Source <img class="seeSource" src="./images/seeSource.svg" alt="seesource_icon"></button>`;
      document.getElementById('modaltags1').innerHTML = `
        <ul class="flex-wrap">
        <li><a>${projects[3].technologies[0]}</a></li>
        <li><a>${projects[3].technologies[1]}</a></li>
        <li><a>${projects[3].technologies[2]}</a></li>
        <li><a>${projects[3].technologies[3]}</a></li>
        </ul>`;
      document.getElementById('modal-supporting-text').innerHTML = projects[3].description;
    }
  });
});

// Form validation feature
const form = document.getElementById('form');
function validation() {
  const email = document.getElementById('user-email').value;
  const text = document.getElementById('text');
  const pattern = /[A-Z]/g;

  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = 'Email address should be in lowercase';
    text.style.color = '#EBEBFF';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = '';
  }
  if (email === '') {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = '';
  }
}
document.getElementById('user-email').addEventListener('keydown', validation);
form.addEventListener('submit', (event) => {
  // stop form submissio//
  event.preventDefault();
  validation();
  if (form.classList.contains('invalid')) {
    form.submit();
  }
});
