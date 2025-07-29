// reference to container
const container = document.querySelector(".container");

// creates all 256 div squares, adds class .square to each div square, then adds each div to container
for(let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add('square');
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

