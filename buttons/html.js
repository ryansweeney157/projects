ocument.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.getElementById('buttonContainer');

    for (let i = 0; i < 10; i++) {
        const button = document.createElement('button');
        button.className = 'random-button';
        button.textContent = `Button ${i + 1}`;
        button.style.backgroundColor = getRandomColor();
        buttonContainer.appendChild(button);
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}