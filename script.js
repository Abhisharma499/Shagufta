const storySteps = [
    {
        // Question 1
        text: "First off... do you promise to answer the next questions honestly? 😇",
        buttons: [
            { text: "Yes, I promise!", nextStep: 1 },
            { text: "Fine, yes", nextStep: 1 }
        ]
    },
    {
        // Question 2
        text: "Awesome. Second question: Am I your favorite person? ☀️",
        buttons: [
            { text: "Yes, obviously", nextStep: 2 },
            { text: "Unquestionably yes", nextStep: 2 }
        ]
    },
    {
        // Question 3
        text: "Would you hate it if I asked you out on a date this weekend? ☕",
        buttons: [
            { text: "I would love it! 😍", nextStep: 4 }, // Jumps to success screen
            { text: "Yes, I'd hate it", nextStep: 3 }    // Triggers the loop question
        ]
    },
    {
        // Question 4 (The Runaway Button Step)
        text: "Are you absolutely sure? There will be free snacks involved... 🍩",
        buttons: [
            { text: "Okay fine, let's go! ✨", nextStep: 4 },
            { text: "Still no", nextStep: 3, type: "runaway" } // This button runs away!
        ]
    },
    {
        // Question 5 / Success Screen
        text: "Yay! 🎉 It's an official date. Check your phone for details! ❤️",
        buttons: [
            { text: "Close", nextStep: -1 }
        ]
    }
];

const startBtn = document.getElementById('start-btn');
const modal = document.getElementById('popup-modal');
const modalText = document.getElementById('modal-text');
const modalButtonsContainer = document.getElementById('modal-buttons');

startBtn.addEventListener('click', () => {
    showStep(0);
});

function showStep(index) {
    if (index === -1) {
        modal.classList.add('hidden');
        return;
    }

    const currentStep = storySteps[index];
    modalText.innerText = currentStep.text;
    modalButtonsContainer.innerHTML = '';
    
    currentStep.buttons.forEach(btnInfo => {
        const button = document.createElement('button');
        button.innerText = btnInfo.text;
        button.classList.add('btn', 'main-btn');
        
        if (btnInfo.type === "runaway") {
            button.classList.add('runaway');
            const escape = () => moveButtonRandomly(button);
            button.addEventListener('mouseover', escape);
            button.addEventListener('touchstart', escape);
        }
        
        button.addEventListener('click', () => {
            showStep(btnInfo.nextStep);
        });
        
        modalButtonsContainer.appendChild(button);
    });

    modal.classList.remove('hidden');
}

function moveButtonRandomly(btn) {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
}
