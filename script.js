document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('creepyButton');
    const messageDiv = document.getElementById('message');
    const creepyTextDiv = document.getElementById('creepyText');
    const creepySound = document.getElementById('creepySound');

    button.addEventListener('click', () => {
        messageDiv.innerText = 'The Shan Xiao curse';
        messageDiv.classList.add('show');

        creepyTextDiv.classList.add('show');
        const creepyMessages = [
            '我在看着你...',
            '你无法逃脱……',
            '他们来了...',
            '黑暗越来越近...',
            'They know you',
            'You’re not alone...',
            'You will never leave...'
        ];

        let index = 0;
        setInterval(() => {
            creepyTextDiv.innerText = creepyMessages[index % creepyMessages.length];
            index++;
        }, 1000);

        creepySound.loop = true;
        creepySound.play();

        // Add blood drips
        for (let i = 0; i < 10; i++) {
            const bloodDrip = document.createElement('div');
            bloodDrip.classList.add('blood-drip');
            bloodDrip.style.left = `${Math.random() * 100}vw`;
            bloodDrip.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(bloodDrip);
        }

        // Add floating Arabic text
        const arabicTexts = [
            'إِنَّا لِلّهِ وَإِنَّـا إِلَيْهِ رَاجِعونَ',
            'الْمَلَائِكَةُ يُحَاسِبُونَكُمْ',
            'حَتَّى زُرْتُمُ الْمَقَابِرَ',
            'النَّارُ جَزَاؤُكُمْ',
            'الظلام يَحْتَجِزُكَ'
        ];

        for (let i = 0; i < 20; i++) {
            const floatingText = document.createElement('div');
            floatingText.classList.add('floating-text');
            floatingText.innerText = arabicTexts[Math.floor(Math.random() * arabicTexts.length)];
            floatingText.style.top = `${Math.random() * 100}vh`;
            floatingText.style.left = `${Math.random() * 100}vw`;
            floatingText.style.animationDuration = `${Math.random() * 10 + 5}s`;
            document.body.appendChild(floatingText);
        }

        // Simulate system hang with overlay and popup
        setTimeout(() => {
            const overlay = document.createElement('div');
            overlay.classList.add('fullscreen-overlay');
            overlay.innerHTML = `<div class="fullscreen-popup">The Shan Xiao curse</div>`;
            document.body.appendChild(overlay);
            overlay.classList.add('show');

            // Disable interactions to mimic system hang
            document.body.style.pointerEvents = 'none';

            // Play additional creepy sounds
            const creepySound2 = document.getElementById('creepySound2');
            const creepySound3 = document.getElementById('creepySound3');
            creepySound2.loop = true;
            creepySound3.loop = true;
            creepySound2.play();
            creepySound3.play();
        }, 5000); // Delay to show overlay and popup
    });
});
