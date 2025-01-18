// Create base 16x16 structure
const container = document.getElementById('container');

for(let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'layout');
    container.append(div);
}