document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const changeTextButton = document.getElementById('changeTextBtn');

    changeTextButton.addEventListener('click', function() {
        greetingElement.textContent = 'The button was clicked!';
    });
});