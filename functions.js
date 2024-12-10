// Perjungimo funkcija
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');  // Perjungia temą
    console.log('Theme toggled');  // Patikrinimas, ar veikia funkcija
});

console.log('Script loaded');