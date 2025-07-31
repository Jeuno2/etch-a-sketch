// reference declarations
let log = console.log;
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
        let opacityCounter = 100;
        divSquare.addEventListener('mouseover', () => {
            divSquare.style.backgroundColor = getRandomColor();
            if(opacityCounter > 0) {
                divSquare.style.opacity = `${opacityCounter - 10}%`;
            }
            opacityCounter = opacityCounter - 10;
        });
    });
} //end function generateGrid

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}