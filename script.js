document.addEventListener('DOMContentLoaded', () => {

    const introScreen = document.getElementById('intro-screen');
    const mainScreen = document.getElementById('main-screen');
    const typingTarget = document.querySelector('.typing-text');
    const openBtn = document.getElementById('open-btn');

    const musicBtn = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');

    const particlesContainer = document.getElementById('particles-container');
    const hugBtn = document.getElementById('hug-btn');
    const hugOverlay = document.getElementById('hug-overlay');

    // TYPEWRITER
    const textToType = "Hey Best Friend… ❤️";
    let typeIndex = 0;

    function typeWriter() {
        if (typeIndex < textToType.length) {
            typingTarget.textContent += textToType.charAt(typeIndex);
            typeIndex++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // SCREEN SWITCH
    openBtn.addEventListener('click', () => {
        introScreen.classList.remove('active');
        mainScreen.classList.add('active');
        showLines();
    });

    // MUSIC CONTROL (MP3)
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            bgMusic.play();
            musicBtn.textContent = "⏸ Pause Music";
            isPlaying = true;
        } else {
            bgMusic.pause();
            musicBtn.textContent = "🎵 Play Music";
            isPlaying = false;
        }
    });

    // FADE IN LINES
    const messageLines = document.querySelectorAll('.message-content p');

    function showLines() {
        messageLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('visible');
            }, index * 800);
        });
    }

    // FLOATING HEARTS
    function createFloatingEmoji() {
        const emoji = document.createElement('div');
        emoji.classList.add('floating-emoji');
        emoji.textContent = "❤️";

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = (Math.random() * 3 + 4) + "s";

        particlesContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 7000);
    }

    setInterval(createFloatingEmoji, 1000);

    // HUG OVERLAY
    hugBtn.addEventListener('click', () => {
        hugOverlay.classList.add('show');

        setTimeout(() => {
            hugOverlay.classList.remove('show');
        }, 3000);
    });

});