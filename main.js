const openM = document.querySelector('.toggle-menu');
const closeM = document.querySelector('.close-menu');
const nav = document.querySelector('nav#navbar');

function openMenu() {
  nav.style.display = 'block';
  closeM.classList.replace('d-none', 'd-block');
}

function closeMenu() {
  nav.style.display = 'none';
  closeM.classList.replace('d-block', 'd-none');
}

openM.addEventListener('click', openMenu);

closeM.addEventListener('click', closeMenu);

// Dynamic feaature section
const featureSectionDiv = document.querySelector('#features .grid');
const artists = [
  {
    picture: './assets/images/pic1.png',
    name: 'Rockstar_TP',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './assets/images/pic2.png',
    name: 'Shally',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './assets/images/pic3.png',
    name: 'Flair_amal',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './assets/images/pic1.png',
    name: 'Rockstar',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './assets/images/pic4.jpg',
    name: 'Asuffi',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './assets/images/pic5.jpg',
    name: 'Fiffi',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
];

const featureSection = artists.map((artist) => `<div class="grid-item flex-row center-align">
  <figure class="feature-img">
    <img src="${artist.picture}" alt="Picture of featured artist">
  </figure>
  <div class="flex-column feature-desc">
    <h4 class="feature-title medium-text regular">${artist.name}</h4>
    <p class="feat color1">${artist.catchPhrase}</p>
    <p>${artist.description}</p>
  </div>
  </div>`).join('');

featureSectionDiv.innerHTML = featureSection;

// Headline graphics
const header = document.querySelector('#headline');
const headGfx = document.querySelectorAll('.bg-icon');

const setAttrSpeed = () => {
  const speed = Math.floor(Math.random() * 10);
  return speed !== 0 ? speed : setAttrSpeed();
};

headGfx.forEach((gfx) => {
  gfx.setAttribute('data-speed', setAttrSpeed());
});

header.addEventListener('mousemove', (e) => {
  headGfx.forEach((gfx) => {
    const x = (window.innerWidth - e.pageX * gfx.dataset.speed) / 100;
    const y = (window.innerHeight - e.pageY * gfx.dataset.speed) / 100;
    gfx.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});