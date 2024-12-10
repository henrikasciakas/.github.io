document.getElementById('theme-toggle').addEventListener('click', function () {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

console.log('Script loaded');

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}


document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);


window.addEventListener('scroll', function() {
    const scrollTopButton = document.getElementById('scroll-top');
    if (window.scrollY > 200) {  
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});


document.getElementById('scroll-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
});