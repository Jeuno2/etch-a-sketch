// reference declarations
const container = document.querySelector('.container');
const button = document.querySelector('.btn');
button.addEventListener('click', generateGrid);

function generateGrid() {
    let dimension = 0;
    let isFalse = true;
    
    container.replaceChildren();
    
    while(isFalse) {
        dimension = Number(prompt('Enter a width no greater than 100 for a new grid to generate: '));
        if(dimension >= 1 && dimension <= 100) {
            isFalse = false;
        }
    }
    const numOfSquares = dimension ** 2;
    
    for(let i = 0; i < numOfSquares ; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.height = `${(800 / dimension)}px`;
        div.style.width = `${(800 / dimension)}px`;
        container.appendChild(div);
    }

    // returns all divs with class .square from the container and turns the collection into an Array
    const divSquares = Array.from(container.querySelectorAll('.square'));

    // forEach div square if a mouseover event is detected adds new class .square-two to div
    divSquares.forEach(divSquare => {
        divSquare.addEventListener('mouseover', () => {
        divSquare.classList.add('square-two');
        });
    });
}