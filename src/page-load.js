import yogaPoseImg from './yoga-pose.png'
import eyeIconSvg from './eye-arrow-left.svg';


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
parentContainer.classList.add('bio')
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

// section 3 components 
function section3Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-3-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-3-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-3-title';
    h1.textContent = "Paulas journey from the beginning ";
    
    const p = document.createElement('p')
    p.id = 'section-3-paragraph';
    p.textContent = "of her nursing career led her down the path of Yoga and Energy Medicine, which served as a powerful homecoming to what she had always intuitively known. She firmly believed that every individual possesses the inherent power and capacity to maintain balance in all aspects of life—mentally, physically, emotionally, and spiritually.";
    
    textsContainer.appendChild(h1)
     textsContainer.appendChild(p)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }
    
// section 4 components 
function section4Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-4-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-4-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-4-title';
    h1.textContent = "east meets west";
    
    const p = document.createElement('p')
    p.id = 'section-4-paragraph';
    p.textContent = "Unlike Western Medicine which looks primarily at the physical body, Eastern practices look at the self holistically. Problems arise when our mind and body become misaligned chronically and continuously. Our life force becomes stuck and illness may follow ,physically ,mentally or emotionally.";
    
    textsContainer.appendChild(h1)
     textsContainer.appendChild(p)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }

// section 5 components 
function section5Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-5-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-5-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-5-title';
    h1.textContent = "...getting to the root cause";
    
    const p = document.createElement('p')
    p.id = 'section-5-paragraph';
    p.textContent = "When we fail to look at the effects of imbalance on all levels of the body, we fail to treat the root cause of dis-ease. Contrary to popular perception, we are all born with an innate ability to feel and understand our own energies.  Energy isn’t something you do, it’s something you already are. Much like a physical practice, you can become more attuned to your energy or life force through easy everyday practice -- feeling your way into balance, health and peace.";
    
    textsContainer.appendChild(h1)
     textsContainer.appendChild(p)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }
// section 6 components 
function section6Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-6-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-6-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-6-title';
    h1.textContent = "Paulas life mission.";
    
    const p = document.createElement('p')
    p.id = 'section-6-paragraph';
    p.textContent = "Paula's life mission revolves around living out her passion for walking a path that connects her with her true nature and being of service to others. She is dedicated to sharing what she learns and finds most beneficial along the way. Through accessible teachings and healing modalities.";
    
    textsContainer.appendChild(h1)
     textsContainer.appendChild(p)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }

// section 7 components 
function section7Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-7-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-7-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-7-title';
    h1.textContent = "...what she can do for you. ";
    
    const p = document.createElement('p')
    p.id = 'section-7-paragraph';
    p.textContent = "Paula offers group workshops and one-on-one private sessions to guide individuals back into their mind and body. Her core offerings are rooted in Subtle Body Anatomy (energy body anatomy) and Physical Anatomy, combined with practices such as Yoga, Intuitive Anatomy, African Reflexology, Family & Systemic Constellation, Kinesiology, and Flower Essence Therapy.";
    
    textsContainer.appendChild(h1)
     textsContainer.appendChild(p)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }

// section 8 components 
function section8Component() {
    const parentContainer = document.createElement('div')
    parentContainer.id = 'section-8-parent-container';
    
    const cardsContainer = document.createElement('div');
    cardsContainer.id = 'section-8-cards-container';
    
const cardItem1 = document.createElement('div')
cardItem1.classList.add('card-item')
const cardItem2 = document.createElement('div')
cardItem2.classList.add('card-item')
const cardItem3 = document.createElement('div')
cardItem3.classList.add('card-item')
const cardItem4 = document.createElement('div')
cardItem4.classList.add('card-item')

let eyeIcon = new Image();
eyeIcon.src = eyeIconSvg; 
eyeIcon.alt = 'hello there'
eyeIcon.id = 'eye-icon'
cardItem1.style.backgroundImage = 'url(eyeIcon)'

const cardTitle = document.createElement('h5')
cardTitle.textContent = 'yoga teacher';

const cardDescription = document.createElement('p');
cardDescription.textContent = 'Teaching yoga to all levels in workshops and in private sessions'

cardItem1.appendChild(eyeIcon)
cardItem1.appendChild(cardTitle)
cardItem1.appendChild(cardDescription)


const eyeIcon2 = new Image();
eyeIcon2.src = eyeIconSvg; 
eyeIcon2.alt = 'hello there'
eyeIcon2.id = 'eye-icon'
cardItem2.style.backgroundImage = 'url(eyeIcon2)'

const cardTitle2 = document.createElement('h5')
cardTitle2.textContent = 'yoga teacher';

const cardDescription2 = document.createElement('p');
cardDescription2.textContent = 'Teaching yoga to all levels in workshops and in private sessions'

cardItem2.appendChild(eyeIcon2)
cardItem2.appendChild(cardTitle2)
cardItem2.appendChild(cardDescription2)



const eyeIcon3 = new Image();
eyeIcon3.src = eyeIconSvg; 
eyeIcon3.alt = 'hello there'
eyeIcon3.id = 'eye-icon'
cardItem3.style.backgroundImage = 'url(eyeIcon3)'

const cardTitle3 = document.createElement('h5')
cardTitle3.textContent = 'yoga teacher';

const cardDescription3 = document.createElement('p');
cardDescription3.textContent = 'Teaching yoga to all levels in workshops and in private sessions'

cardItem3.appendChild(eyeIcon3)
cardItem3.appendChild(cardTitle3)
cardItem3.appendChild(cardDescription3)





    parentContainer.appendChild(cardsContainer)
    cardsContainer.appendChild(cardItem1)
    cardsContainer.appendChild(cardItem2)
    cardsContainer.appendChild(cardItem3)
    cardsContainer.appendChild(cardItem4)

    return parentContainer
    }

// section 9 components 
function section9Component() {
    const parentContainer = document.createElement('div')
    parentContainer.id = 'section-9-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-9-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-7-title';
    h1.textContent = "Contact Paula";
    
const hr = document.createElement('hr')

    const p = document.createElement('h6')
    p.id = 'section-7-paragraph';
    p.textContent = "+66 123456789";
    
    const p2 = document.createElement('h6')
    p2.id = 'section-7-paragraph-2';
    p2.textContent = "paulasmoonbythesea@gmail.com";
    
    textsContainer.appendChild(h1)
    textsContainer.appendChild(hr)
     textsContainer.appendChild(p)
     textsContainer.appendChild(p2)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }



export {
    instructorName,
     yogaPoseImage,
      section1Description,
       pageLoadNav,
       flipChartTitle,
       section2Component,
       section3Component,
       section4Component,
       section5Component,
       section6Component,
       section7Component,
       section8Component,
       section9Component,

     }; 