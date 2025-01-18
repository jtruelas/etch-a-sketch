// Create base 16x16 structure
const bodySelector = document.getElementById('main-container');
const container = document.getElementById('container');
let gridSize = 16;

for(let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'layout');
    container.append(div);
}

// Create event listener
container.addEventListener('mousemove', (event) => {
    
    // Create boundary for screen
    const screen = container.getBoundingClientRect();

    // Find the border size
    const computedStyle = getComputedStyle(container);
    const borderTop = parseInt(computedStyle.borderTopWidth, 10);
    const borderBottom = parseInt(computedStyle.borderBottomWidth, 10);
    const borderLeft = parseInt(computedStyle.borderLeftWidth, 10);
    const borderRight = parseInt(computedStyle.borderRightWidth, 10);

    // Find inner boundaries
    const screenTop = screen.top + borderTop;
    const screenBottom = screen.bottom - borderBottom - 5;
    const screenLeft = screen.left + borderLeft;
    const screenRight = screen.right - borderRight - 5;

    // Check if mouse is on screen
    if(event.clientX >= screenLeft &&
        event.clientX < screenRight &&
        event.clientY >= screenTop &&
        event.clientY < screenBottom
    ) {
    const sketch = document.createElement('div');
    sketch.setAttribute('id', 'sketch');
    sketch.style.position = 'absolute';
    sketch.style.width = '8px';
    sketch.style.height = '8px';
    sketch.style.borderRadius = '50%';
    sketch.style.backgroundColor = 'black';
    sketch.style.top = `${event.clientY}px`;
    sketch.style.left = `${event.clientX}px`;
    container.appendChild(sketch);
    }
});

// Create button element with a prompt
const button = document.createElement('button');
button.setAttribute('id', 'grid-button');
button.textContent = "Shake-It";
bodySelector.prepend(button);

// Create listner for button
button.addEventListener('click', (event) => {

    // Clear created divs
    clearDivs = document.querySelectorAll('#sketch');
    clearDivs.forEach((element) => element.remove());
});