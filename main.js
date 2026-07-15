const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const toast = document.getElementById('toast');
let firstMoveDone = false;
let toastTimer;

function moveNoButton(event) {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    if (!firstMoveDone) {
        noBtn.style.left = '220px';
        noBtn.style.top = '120px';
        firstMoveDone = true;
        return;
    }

    const mouseX = event?.clientX ?? window.innerWidth / 2;
    const mouseY = event?.clientY ?? window.innerHeight / 2;
    const minDistance = 140;

    let randomX = 0;
    let randomY = 0;
    let distance = 0;
    let attempts = 0;

    do {
        randomX = Math.random() * (window.innerWidth - buttonWidth - 20);
        randomY = Math.random() * (window.innerHeight - buttonHeight - 20);

        const buttonCenterX = randomX + buttonWidth / 2;
        const buttonCenterY = randomY + buttonHeight / 2;
        distance = Math.hypot(buttonCenterX - mouseX, buttonCenterY - mouseY);
        attempts++;
    } while (attempts < 60 && distance < minDistance);

    noBtn.style.left = `${Math.max(10, randomX)}px`;
    noBtn.style.top = `${Math.max(10, randomY)}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', function (event) {
    event.preventDefault();
    moveNoButton(event.touches[0]);
}, { passive: false });

yesBtn.addEventListener('click', function () {
    toast.classList.remove('show');
    void toast.offsetWidth;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
        toast.classList.remove('show');
    }, 2200);
});
