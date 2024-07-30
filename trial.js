//JS for the marquees
const marquee = document.getElementById('marquee');
const marqueeItems = document.querySelectorAll('.marquee-item');

let isPaused = false;

marquee.addEventListener('mouseover', () => {
    isPaused = true;
    marquee.style.animationPlayState = 'paused';
});

marquee.addEventListener('mouseout', () => {
    if (isPaused) {
    marquee.style.animationPlayState = 'running';
    isPaused = false;
    }
});

marqueeItems.forEach(item => {
    item.addEventListener('click', () => {
    const isActive = item.classList.contains('show');
    marqueeItems.forEach(i => i.classList.remove('show'));

    if (!isActive) {
        item.classList.add('show');
        marquee.style.animationPlayState = 'paused';
    } else {
        marquee.style.animationPlayState = 'running';
    }
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
    marqueeItems.forEach(item => item.classList.remove('show'));
    marquee.style.animationPlayState = 'running';
    }
});

//JS for the top-bar sticky scroll
window.addEventListener('scroll', function() {
    const topBar = document.querySelector('.top-bar');
    const sticky = topBar.offsetTop;

    if (window.pageYOffset > sticky) {
        topBar.classList.add('sticky');
    } else {
        topBar.classList.remove('sticky');
    }
});

// JS for the phone side bar
/*function openMenu() {
    document.getElementById("header3").style.width = "50vh";
    document.getElementById("header3").style.backgroundColor = "hsl(36, 100%, 99%)";
    document.getElementById("overlay").style.display = "block"; // Show overlay
}
function closeMenu() {
    document.getElementById("header3").style.width = "0";
    document.getElementById("overlay").style.display = "none"; // Show overlay
}*/

function openMenu() {
    document.getElementById("header3").style.width = "50vh";
    document.getElementById("header3").style.backgroundColor = "hsl(36, 100%, 99%)";
    document.getElementById("overlay").style.display = "block"; // Show overlay
    document.body.classList.add('open'); // Prevent body overflow
}

function closeMenu() {
    document.getElementById("header3").style.width = "0";
    document.getElementById("overlay").style.display = "none"; // Hide overlay
    document.body.classList.remove('open'); // Allow body overflow
}