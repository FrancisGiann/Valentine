const noBtn = document.getElementById('no-btn');
const initialYesBtn = document.getElementById('initial-yes-btn');
const finalYesBtn = document.getElementById('final-yes-btn');
const mainCard = document.getElementById('main-card');
const successMsg = document.getElementById('success-msg');
const sadMusic = document.getElementById('sad-music');
const happyMusic = document.getElementById('happy-music');
const normalImg = document.getElementById('normal-img');
const sadImg = document.getElementById('sad-img');
const questionText = document.getElementById('question-text');
const initialBtnGroup = document.getElementById('initial-btn-group');
const finalBtnGroup = document.getElementById('final-btn-group');
const letterBtn = document.getElementById('letter-btn');
const letterModal = document.getElementById('letter-modal');
const closeBtn = document.querySelector('.close-btn');

let noClicks = 0;
const messages = [
    "Will you be my Valentine?",
    "Are you really saying no?? 🥺",
    "Whyyyy no? 😢",
    "Don't do this to me... 😭",
    "You're breaking my heart! 💔"
];

noBtn.addEventListener('click', () => {
    noClicks++;
    if (noClicks < 5) {
        questionText.innerText = messages[noClicks];
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
        noBtn.style.position = 'fixed';
        noBtn.style.left = Math.max(20, x) + 'px';
        noBtn.style.top = Math.max(20, y) + 'px';
    } else {
        normalImg.style.display = 'none';
        sadImg.style.display = 'inline-block';
        questionText.innerText = "Ouch... you really broke my heart.";
        initialBtnGroup.style.display = 'none';
        finalBtnGroup.style.display = 'flex';
        sadMusic.volume = 0.5;
        sadMusic.play();
    }
});

function triggerSuccess() {
    mainCard.style.display = 'none';
    successMsg.style.display = 'block';
    sadMusic.pause();
    sadMusic.currentTime = 0;
    happyMusic.volume = 0.6;
    happyMusic.play();

    var end = Date.now() + (3 * 1000);
    var colors = ['#ff4d6d', '#ff8fa3', '#ffffff'];
    (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}

initialYesBtn.addEventListener('click', triggerSuccess);
finalYesBtn.addEventListener('click', triggerSuccess);

letterBtn.addEventListener('click', () => {
    letterModal.style.display = 'flex';
});

// Close modal when clicking (X)
closeBtn.addEventListener('click', () => {
    letterModal.style.display = 'none';
});

// Close modal when clicking outside the box
window.addEventListener('click', (e) => {
    if (e.target === letterModal) {
        letterModal.style.display = 'none';
    }
});