// import function components from page-load.js
import {instructorName, yogaPoseImage, section1Description, pageLoadNav, flipChartTitle,  } from "./page-load";
// import css style file
import './style.css'

// get body element
const body = document.body;

// access content output container
const contentOutput = document.getElementById('content')

// append restaurant name to content output
body.insertBefore(instructorName(), contentOutput)

// append nav to content output
body.insertBefore(pageLoadNav(), contentOutput)


 // append yoga pose image to content output
contentOutput.appendChild(yogaPoseImage());

 // access description container 
const section1Container = document.getElementById('description-container')
// append restaurant description to description container
section1Container.appendChild(section1Description())

setInterval(flipChartTitle, 2000);





// // get nav ul element
// const ulElement = document.getElementById('nav-ul')
// // get li elements of nav bar
// const liElements = ulElement.getElementsByTagName('li');
// for (let i = 0; i < liElements.length; i++) {
//     const element = liElements[i];
//     element.addEventListener('click', (event) => {
//  // clear the elements in content container
        
// // determine which li item was clicked
// if (event.target.id === 'Lunch') {
//     ClearContentDom(contentOutput);
//     contentOutput.appendChild(lunchHeading())
//     contentOutput.appendChild(smallBitesSelection())
//     contentOutput.appendChild(houseBurgersSelection())
//     contentOutput.appendChild(mainPlatesSelection())
//     // contentOutput.appendChild(optionalOmeletteSelection())


// }

// if (event.target.id === 'Breakfast') {
//     ClearContentDom(contentOutput);
//     contentOutput.appendChild(breakfastHeading())
//     contentOutput.appendChild(bakedSelection())
//     contentOutput.appendChild(breakfastSelection())
//     contentOutput.appendChild(optionalOmeletteSelection())
// }
//     })

// }
// function ClearContentDom(parentElement) {
    
//     // loop through all child elements of content container
// // for (let i = 0; i < contentOutput.children.length; i++) {
// //     const childElements = contentOutput.children[i];
// //     contentOutput.removeChild(childElements)
    

// while (parentElement.firstChild) {
//     parentElement.removeChild(parentElement.firstChild)
// }


// }





