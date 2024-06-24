document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); 
}); //changes styles.css to ones with dark mode id when dark mode button is clicked

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
}); //takes you back to the index.html when back button is clicked