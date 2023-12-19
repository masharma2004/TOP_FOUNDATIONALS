document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('grid-container');

    function createGrid(val) {
        removeAllChildNodes(container);
        container.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${val}, 1fr)`;

        for (let i = 0; i < val * val; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');

            square.addEventListener('mouseover', function (event) {
                handleMouseOver(event);
            });

            container.appendChild(square);
        }
    }

    function handleMouseOver(event) {
        let mode = getMode();
        if (mode === 'black') {
            event.target.style.backgroundColor = 'black';
        } else if (mode === 'rgb') {
            event.target.style.backgroundColor = getRandomColor();
        } else if (mode === 'color') {
            let newColor = document.getElementById('color').value;
            event.target.style.backgroundColor = newColor;
        }
    }

    function getMode() {
        const buttons = document.querySelectorAll('.mode-btn');
        for (const button of buttons) {
            if (button.classList.contains('active')) {
                return button.getAttribute('data-mode');
            }
        }
        return 'black'; // default mode
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const reset = document.getElementById('reset');
    reset.addEventListener('click', function () {
        let val = document.getElementById('slider').value;
        let squares = container.children;
        for (let i = 0; i < val * val; i++) {
            squares[i].style.backgroundColor = 'white';
        }
    });

    const rgb = document.getElementById('rgb');
    rgb.addEventListener('click', function () {
        let val = document.getElementById('slider').value;
        let squares = container.children;
        for (let i = 0; i < val * val; i++) {
            squares[i].addEventListener('mouseover', function (event) {
                squares[i].style.backgroundColor = getRandomColor();
            });
        }
    });

    const black = document.getElementById('black');
    black.addEventListener('click', function () {
        let val = document.getElementById('slider').value;
        let squares = container.children;
        for (let i = 0; i < val * val; i++) {
            squares[i].addEventListener('mouseover', function (event) {
                event.target.style.backgroundColor = 'black';
            });
        }
    });

    const chooseColor = document.getElementById('color');
    chooseColor.addEventListener('input', function () {
        let val = document.getElementById('slider').value;
        let newColor = document.getElementById('color').value;
        let squares = container.children;
        for (let i = 0; i < val * val; i++) {
            squares[i].addEventListener('mouseover', function (event) {
                event.target.style.backgroundColor = newColor;
            });
        }
    });

    const slider = document.getElementById('slider');
    const screenVal = document.querySelector('.value');
    slider.addEventListener('input', function () {
        let val = slider.value;
        screenVal.textContent = val;
        removeAllChildNodes(container);
        createGrid(val);
    });

    createGrid(16);
});
