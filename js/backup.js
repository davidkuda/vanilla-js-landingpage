// count number of clicks on document

document.addEventListener('click', function () {
    console.log('the document was clicked')
});


// create new section

const newSection = document.createElement('section');

const newDiv = document.createElement('div');

const newTitle = document.createElement('h2');
newTitle.textContent = 'This is a new h2 title!'

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph!'

newDiv.appendChild(newTitle);
newDiv.appendChild(newParagraph);
newDiv.appendChild(newParagraph);

newSection.appendChild(newDiv);

// end of create section

// --- add section on click
document.addEventListener('click', appendNewSection);
// ---

