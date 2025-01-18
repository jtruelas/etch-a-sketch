// Create base 16x16 structure
const bodySelector = document.getElementById('main-container');
const container = document.getElementById('container');

for(let i = 0; i < 16; i++) {
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

    console.log(`Screen Dimensions:\nTop: ${screenTop}\n Bottom: ${screenBottom}\n Left: ${screenLeft}\n Right: ${screenRight}\n`);
    console.log(`Mouse Location:\nX: ${event.clientX}\nY: ${event.clientY}`);

    // Check if mouse is on screen
    if(event.clientX >= screenLeft &&
        event.clientX < screenRight &&
        event.clientY >= screenTop &&
        event.clientY < screenBottom
    ) {
    const sketch = document.createElement('div');
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
button.textContent = "Create New Grid";
bodySelector.prepend(button);