function changeColor() {
    const body = document.body;
    const currentColor = body.style.backgroundColor || window.getComputedStyle(body).backgroundColor;
    const newColor = getRandomColor();

    if (newColor === currentColor) {
        changeColor(); // Call the function again to get a different color
    } else {
        body.style.backgroundColor = newColor;
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
