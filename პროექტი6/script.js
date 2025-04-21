let count = 0;

function updateCounter() {
    document.getElementById('counter').textContent = count;
}

function incrementCounter() {
    count++;
    updateCounter();
}

function decrementCounter() {
    count--;
    updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
}
