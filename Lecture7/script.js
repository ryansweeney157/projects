
    const buttonContainer = document.getElementById('buttonContainer');
    const colorSelect = document.getElementById('colorSelect');
    const originalColors = [];

    // Create 10 buttons with random colors
    for (let i = 0; i < 10; i++) {
        const button = document.createElement('button');
        button.className = 'random-button';
        button.textContent = `Button ${i + 1}`;//sets button name from 1-10
    
        const initialColor = getRandomColor();
        //generates the random colors
        button.style.backgroundColor = initialColor;
        originalColors.push(initialColor); // Store the initial colors
        buttonContainer.appendChild(button);
    }

    // Change button colors based on the selected option
    colorSelect.addEventListener('change', () => {
        const buttons = document.querySelectorAll('.random-button');
        const selectedColor = colorSelect.value;

        buttons.forEach((button, index) => {
            if (selectedColor === 'random') {
                button.style.backgroundColor = getRandomColor();
            } else if (selectedColor === 'reset') {
                button.style.backgroundColor = originalColors[index]; // Reset to original color
            } else {
                button.style.backgroundColor = selectedColor;
            }
        });
    });


function getRandomColor() {
    //contains all possible characters in hexadecimal
    const letters = '0123456789ABCDEF';
    //initializes color variable
    let color = '#';
    //runs for 6 times since there are six characters in hexadecimal
    for (let i = 0; i < 6; i++) {
        //hexadecimal uses 16 based number system
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
