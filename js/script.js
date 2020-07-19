// Global Variables

const navbar = document.querySelector('#navbar__list');
const mainElement = document.querySelector('main');
const loading = document.querySelector('.loader');
const addSectionButton = document.querySelector('.add-section-button');
const bodyTag = document.querySelector('body');
const buttonLightMode = document.querySelector('.button-light-mode')
const buttonDarkMode = document.querySelector('.button-dark-mode')
const activeSection = document.querySelector('.target')
const allSections = document.querySelectorAll('section')

const loremIpsumString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
const aliquamString = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';

let sectionCounter = 4;

// todo:
    // add dynamic section nr.
    // add data property


/* 

---
--- Feature:
---
--- append new section to <main>
--- 

*/

const appendNewNavLi = () => {

    const stringNewNavLi = `<a href="#section${sectionCounter}"><li>section ${sectionCounter}</li></a>`;
    navbar.insertAdjacentHTML('beforeend', stringNewNavLi);
}

// function to append a new section

const appendNewSection = () => {

    const stringNewSection = `
    <section id="section${sectionCounter}" data-nav="Section ${sectionCounter}">
        <div class="landing__container">
            <h2>Section ${sectionCounter}</h2>
            <p>${loremIpsumString}</p>
            <p>${aliquamString}</p>
        </div>
    </section>`;

    mainElement.insertAdjacentHTML('beforeend', stringNewSection);

};

const increaseSectionCounter = () => {
    sectionCounter++
}

const appendSection = () => {
    appendNewNavLi();
    appendNewSection();
    increaseSectionCounter();
}

// show / hide loader at the bottom of the page

const showLoading = () => {

    loading.classList.add('show')

    setTimeout(

        function() {

            loading.classList.remove('show');

            setTimeout(

                function() {
                    appendNewNavLi();
                    appendNewSection();
                    increaseSectionCounter();
                },
                300
            )
        },

        1000
    );
};

const hideLoading = () => {
    loading.classList.remove('show')
};

// event listener: if bottom is reached with scroll, append a new section to <main>

window.addEventListener('scroll', () => {

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
        showLoading();
    };
});

// event listener for the add section button

addSectionButton.addEventListener('click', function() {appendSection()});

// check if section is active (in viewport and closest to top)

const isInViewport = function(e) {
    const bounding = e.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom - 100 <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', function() {

    for (section of allSections) {
        if (isInViewport(section)) {
            section.classList.add('active-section')
        } else {
            section.classList.remove('active-section')
        }
    }
});


// go to begin button


// toggle dark-mode / light-mode

const activateDarkMode = () => {
    bodyTag.className = 'dark-mode'
};

const activateLightMode = () => {
    bodyTag.className = 'light-mode'
};

buttonDarkMode.addEventListener('click', function() {activateDarkMode();})
buttonLightMode.addEventListener('click', function () {activateLightMode();})

