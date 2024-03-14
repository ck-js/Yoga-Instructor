import yogaPoseImg from './yoga-pose.png'

function instructorName() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
h1.innerHTML = 'Paula Walsh';

div.appendChild(h1)

    return div;
}
function pageLoadNav() {
// create nav container 
    const navContainer = document.createElement('div');
navContainer.id = 'nav-container';
// create ul element 
const ulElement = document.createElement('ul');
ulElement.id = 'nav-ul';
// create array of list items
const navItems = ['About Me', 'Upcoming Events', 'Contact Me']

// loop through nav items
for (let i = 0; i < navItems.length; i++) {
// create li element
const liElement = document.createElement('li');
// set id of list items
liElement.id = navItems[i]
// set text content of each li element
liElement.textContent = navItems[i];

// append li elements to ul element
ulElement.appendChild(liElement);

// liElement.addEventListener('click', (event) => {
//     alert('hello' + event.target.textContent)
// })
}
// append ul element to nav container
navContainer.appendChild(ulElement)

return navContainer;

}


function yogaPoseImage() {
    const descriptionContainer = document.createElement('div');
    const imgContainer = document.createElement('div');

descriptionContainer.id = 'description-container';
imgContainer.id = 'img-container';

    const img = new Image();
    img.src = yogaPoseImg;
    img.alt = 'women holding yoga pose with full moon in background';

imgContainer.style.backgroundImage = 'url(img)'


    descriptionContainer.appendChild(imgContainer)
imgContainer.appendChild(img)


    return descriptionContainer;
}
function section1Description() {

    const div = document.createElement('div');
    div.id = 'text-container';
const h1 = document.createElement('h1');
h1.id = 'section-1-title';
    
const p = document.createElement('p');
// p.id = 'section-1-paragraph';
p.id = 'paragraph-description';
// h1.innerHTML = '';

// p.innerHTML = "Hi, I'm Paula. I come from Ireland, and my family has a strong connection to various energy modalities, herbalism, and sustainable farming methods. I've been immersed in the world of subtle energies for many years. For the past two decades, I've split my time between my homeland and Thailand, living, studying, practicing, and embracing a holistic lifestyle."
// Throughout my journey, my main focus has been on connecting with my true self and serving others, driven by my profound love for the human body, health, and well-being. This passion led me to pursue a career in nursing. However, as time went on, I grew disillusioned with the Western medical approach. Two significant experiences with patients reinforced a pattern I observed repeatedly—the emphasis on treating symptoms rather than addressing the underlying cause of disease.
p.textContent = "Meet Paula, a passionate individual hailing from Ireland. Her family has deep roots in various energy modalities, herbalism, and sustainable farming methods. Paula has spent years immersing herself in the realm of subtle energies, nurturing her understanding and connection with this fascinating field. With a dual home in Ireland and Thailand, she has spent two decades studying, practicing, and embracing a holistic lifestyle.";


div.appendChild(h1)
div.appendChild(p)

return div;
}

const flipChartTitles = [
    'yoga teacher',
 'registered nurse',
  'yoga anatomy teacher',
   'certified reiki master',
    'subtle body eneergy anatomy',
     'systematic family constellations ',
     'intuitive energy therapy '
    ];
    let currentIndex = 0;
function flipChartTitle() {
    
  const flipChartElement = document.getElementById("section-1-title");
  flipChartElement.textContent = flipChartTitles[currentIndex];
  
  currentIndex = (currentIndex + 1) % flipChartTitles.length;
}

// section 2 components 
function section2Component() {
const parentContainer = document.createElement('div')
parentContainer.id = 'section-2-parent-container';

const textsContainer = document.createElement('div');
textsContainer.id = 'section-2-text-container';

const h1 = document.createElement('h1');
h1.id = 'section-2-title';
h1.textContent = 'why Paula does what she does...'


const p = document.createElement('p')
p.id = 'section-2-paragraph';
p.textContent = "At the core of her personal journey lies a profound commitment to self-discovery and a genuine desire to make a positive impact on others' lives. This unwavering love for the human body, health, and well-being led her to pursue a career in nursing. However, Paula gradually grew disenchanted with the limitations of Western medicine. Two pivotal encounters with patients reaffirmed a recurring pattern—the focus on treating symptoms rather than delving into the root causes of disease.";

textsContainer.appendChild(h1)
 textsContainer.appendChild(p)

parentContainer.appendChild(textsContainer)

return parentContainer
}




export {
    instructorName,
     yogaPoseImage,
      section1Description,
       pageLoadNav,
       flipChartTitle,
       section2Component 
     }; 