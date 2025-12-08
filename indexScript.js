// create little dots on the screen to look like stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 1 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// create clouds (smoky effect)
const cloudsContainer = document.getElementById('clouds');
for (let i = 0; i < 5; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.width = Math.random() * 200 + 100 + 'px';
    cloud.style.height = Math.random() * 80 + 40 + 'px';
    cloud.style.left = Math.random() * 100 + '%';
    cloud.style.top = Math.random() * 80 + '%';
    cloud.style.animationDelay = Math.random() * 10 + 's';
    cloud.style.animationDuration = Math.random() * 10 + 15 + 's';
    cloudsContainer.appendChild(cloud);
}

// "click to enter" button effect
const screen = document.getElementById('screen');
const splashContent = document.getElementById('splashContent');
const mainContent = document.getElementById('mainContent');

screen.addEventListener('click', function() {
    splashContent.classList.add('hidden');
    mainContent.classList.remove('hidden');
});

// see if i can have a "typing out" effect for the smaller text

// Add navigation functionality to buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});

// Your existing enter button code (if you have it)
const enterButton = document.querySelector('.enter-button');
if (enterButton) {
    enterButton.addEventListener('click', function() {
        document.getElementById('splashContent').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
    });
}

