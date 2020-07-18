// Global Variables

const navbar = document.querySelector('ul');
const mainElement = document.querySelector('main');
const loading = document.querySelector('.loader');

const loremIpsumString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
const aliquamString = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';

let counter = 4;

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

// counter to number a new section

// function to append a new section

const appendNewNavLi = () => {
    const newNavLi = document.createElement('li');
    newNavLi.innerHTML = 'Section ' + counter;
    navbar.appendChild(newNavLi);
}

const appendNewSection = () => {

    const stringNewSection = `
    <section id="section${counter}" data-nav="Section ${counter}">
        <div class="landing__container">
            <h2>Section ${counter}</h2>
            <p>${loremIpsumString}</p>
            <p>${aliquamString}</p>
        </div>
    </section>`;

    mainElement.insertAdjacentHTML('beforeend', stringNewSection);

    counter += 1;

};

// show / hide loader at the bottom of the page

const showLoading = () => {loading.classList.add('show')};
const hideLoading = () => {loading.classList.remove('show')};

// event listener: if bottom is reached with scroll, append a new section to <main>

window.addEventListener('scroll', () => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
        showLoading();
    };
});

document.addEventListener('click', appendNewSection);
document.addEventListener('click', appendNewNavLi);


// check if section is active (in viewport and closest to top)

// scroll rather than jump to anchors

// header

// automatically append a new section once user scrolls to the bottom of the page

// go to begin button

// detect bottom scroll position and add a new page