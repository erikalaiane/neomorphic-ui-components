let clickCount = 0;

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 4px 4px 15px rgba(108, 92, 231, 0.4);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(alertBox);
    setTimeout(() => {
        alertBox.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alertBox.remove(), 300);
    }, 2000);
}

function incrementCounter() {
    clickCount++;
    document.getElementById('counter').textContent = clickCount;
}

function animateProgress() {
    const progressBar = document.getElementById('progress');
    progressBar.style.width = '0%';
    setTimeout(() => {
        progressBar.style.width = Math.floor(Math.random() * 100) + '%';
    }, 100);
}

function handleInput(event) {
    const feedback = document.getElementById('inputFeedback');
    const value = event.target.value;
    if (value.length > 0) {
        feedback.textContent = `Você digitou: "${value}" (${value.length} caracteres)`;
    } else {
        feedback.textContent = '';
    }
}

// Animar progress bar no carregamento
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('progress').style.width = '75%';
    }, 500);
});