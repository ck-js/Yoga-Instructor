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

    // const parentContainer = document.createElement('div');
    // parentContainer.id = 'parent-container';

    const div = document.createElement('div');
    div.id = 'text-container';
const h1 = document.createElement('h1');
h1.id = 'section-1-title';

// const div2 = document.createElement('div');
//     div2.id = 'paragraph-container';
    

const p = document.createElement('p');
// p.id = 'section-1-paragraph';
p.id = 'paragraph-description';
// h1.innerHTML = '';
p.innerHTML = 'At our establishment, we take pride in ensuring that all of our dishes are freshly prepared. We hold a strong aversion to the use of pesticides and preservatives. To uphold our commitment to quality, we strive to incorporate local, organic, and free-range ingredients whenever possible, depending on their availability. Listed below are some of our most beloved dishes. We encourage you to visit us and experience our ever-evolving menu firsthand.';




div.appendChild(h1)
div.appendChild(p)

return div;
}

const flipChartTitles = ['yoga instructor', 'nutritionist', 'spiritual healer'];
    let currentIndex = 0;
function flipChartTitle() {
    
  const flipChartElement = document.getElementById("section-1-title");
  flipChartElement.textContent = flipChartTitles[currentIndex];
  
  currentIndex = (currentIndex + 1) % flipChartTitles.length;
}





export {
    instructorName,
     yogaPoseImage,
      section1Description,
       pageLoadNav,
       flipChartTitle, 
     }; 