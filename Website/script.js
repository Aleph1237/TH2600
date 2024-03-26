document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.getElementById('welcomeText');
    const changeColorBtn = document.getElementById('changeColorBtn');

    changeColorBtn.addEventListener('click', function() {
        welcomeText.style.color = welcomeText.style.color === 'red' ? '#333' : 'red';
    });
});
