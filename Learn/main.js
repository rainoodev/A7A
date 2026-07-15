const noBtn = document.getElementById('noBtn');
    let firstMoveDone = false;

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
            randomX = Math.random() * (window.innerWidth - buttonWidth);
            randomY = Math.random() * (window.innerHeight - buttonHeight);

            const buttonCenterX = randomX + buttonWidth / 2;
            const buttonCenterY = randomY + buttonHeight / 2;
            distance = Math.hypot(buttonCenterX - mouseX, buttonCenterY - mouseY);
            attempts++;
        } while (attempts < 60 && distance < minDistance);

        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }

    noBtn.addEventListener('mouseover', moveNoButton);

    // إشعار جميل داخل الصفحة لما يدوس على الزرار "yes"
    const yesBtn = document.getElementById('yesBtn');
    const toast = document.getElementById('toast');
    let toastTimer;

    yesBtn.addEventListener('click', function() {
        toast.classList.remove('show');
        void toast.offsetWidth;
        toast.classList.add('show');

        clearTimeout(toastTimer);
        toastTimer = setTimeout(function() {
            toast.classList.remove('show');
        }, 2200);
    });