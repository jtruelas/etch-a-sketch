// Create base 16x16 structure
const container = document.getElementById('container');

for(let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'layout');
    container.append(div);
}

// Create event listener
document.addEventListener('mousemove', (event) => {
    const sketch = document.createElement('div');
    sketch.style.position = 'absolute';
    sketch.style.width = '8px';
    sketch.style.height = '8px';
    sketch.style.borderRadius = '50%';
    sketch.style.backgroundColor = 'black';
    sketch.style.left = event.clientX + 'px';
    sketch.style.top = event.clientY + 'px';
    container.appendChild(sketch);
});