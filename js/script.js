document.addEventListener('click', function() {
    console.log('the document was clicked')
});


// Global Variables

const mainElement = document.querySelector('main');

const loremIpsumString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
const aliquamString = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';

// create new section with div, h2 and two paragraphs.

// add classes: 
    // section id="section3"
    // div class="landing__container"


const stringNewSection = `
<section id="sectionx" data-nav="Section x">
    <div class="landing__container">
        <h2>Section x</h2>
        <p>${loremIpsumString}</p>
        <p>${aliquamString}</p>
    </div>
</section>`

document.addEventListener('click', function() {
    mainElement.insertAdjacentHTML('beforeend', stringNewSection);
});


// append new section to <main>


// check if section is active (in viewport and closest to top)

// scroll rather than jump to anchors

// header


// automatically append a new section once user scrolls to the bottom of the page


// go to begin button