/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.querySelector('#navbar__list');
const mainElement = document.querySelector('main');
const loading = document.querySelector('.loader');
const addSectionButton = document.querySelector('.add-section-button');
const bodyTag = document.querySelector('body');
const buttonLightMode = document.querySelector('.button-light-mode');
const buttonDarkMode = document.querySelector('.button-dark-mode');
const activeSection = document.querySelector('.target');
const allSections = document.getElementsByTagName('section');
const initialSections = document.querySelectorAll('section');

const loremIpsumString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
const aliquamString = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';

let sectionCounter = 4;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const appendNewNavLi = () => {

    const stringNewNavLi = `<li id="navigation-section-${sectionCounter}">section ${sectionCounter}</li>`;
    navbar.insertAdjacentHTML('beforeend', stringNewNavLi);
}

const appendNewSection = () => {

const stringNewSection = `
    <section id="section${sectionCounter}" data-nav="Section ${sectionCounter}">
        <div class="landing__container">
            <h2>Section ${sectionCounter}</h2>
            <p>${loremIpsumString}</p>
        </div>
    </section>`;

    mainElement.insertAdjacentHTML('beforeend', stringNewSection);

};

const increaseSectionCounter = () => {
    sectionCounter++
}

// check if a section is in the viewport

const isInViewport = function (e) {
    const bounding = e.getBoundingClientRect();
    return (
        bounding.top >= -320 &&
        bounding.left >= 0 &&
        bounding.bottom - 320 <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


const appendSection = () => {
    appendNewNavLi();
    appendNewSection();
    increaseSectionCounter();
}

const activateDarkMode = () => {
    bodyTag.className = 'dark-mode'
};

const activateLightMode = () => {
    bodyTag.className = 'light-mode'
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// dynamically populate nav

window.addEventListener('scroll', function () {

    for (section of initialSections) {
        if (isInViewport(section)) {
            if (document.getElementById(`navigation-section-${section.dataset.nav.slice(8,9)}`)) {

            } else {
                const stringNewNavLiSpecific = `<li id="navigation-section-${section.dataset.nav.slice(8,9)}">${section.dataset.nav}</li></a>`;
                navbar.insertAdjacentHTML('beforeend', stringNewNavLiSpecific);
            }
        }
    }
});

// append a new section upon button click

addSectionButton.addEventListener('click', function () {
    appendSection()
});

// highlight active section

window.addEventListener('scroll', function () {

    for (section of allSections) {

        const activeNavLi = document.getElementById(`navigation-section-${section.dataset.nav.slice(8, 9)}`);

        if (isInViewport(section)) {
            section.classList.add('active-section');
            activeNavLi.className = 'active-section';

        } else {
            section.classList.remove('active-section');
            activeNavLi.className = '';
        }
    }
});


/**
 * End Events
 * 
 * Ideas for further development:
 * 
 * - Highlight section in navigation
 * - Scroll to new section upon creation
 * - Go To Beginning of page
 * - finish "infinite scrolling"
 * - add collapse feature / accordeon
*/