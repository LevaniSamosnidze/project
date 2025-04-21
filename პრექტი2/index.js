let screen = document.getElementById('screen');

function appendNumber(number) {
    screen.value += number;
}

function setOperation(p) {
    screen.value += p;
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}

function clearScreen() {
    screen.value = '';
}
