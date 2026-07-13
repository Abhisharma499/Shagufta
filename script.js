const storySteps = [
    {
        // Question 1 (Index 0)
        text: "Hey Shagufta, Jatinder here... I have a surprise for you 😇 Do you promise to answer honestly?",
        buttons: [
            { text: "I promise! 🥰", nextStep: 1 },
            { text: "Yes, go on", nextStep: 1 }
        ]
    },
    {
        // Question 2 (Index 1)
        text: "Do you believe in destiny? Because meeting you felt like my favorite page of a love story... ✨",
        buttons: [
            { text: "Yes, I do! ❤️", nextStep: 2 },
            { text: "Only with you 🥺", nextStep: 2 }
        ]
    },
    {
        // Question 3 (Index 2)
        text: "Am I the lucky person who gets to make you laugh and bring that gorgeous smile to your face? ☀️",
        buttons: [
            { text: "Yes, obviously! 💕", nextStep: 3 },
            { text: "Unquestionably yes!", nextStep: 3 }
        ]
    },
    {
        // Question 4 (Index 3)
        text: "Did you know that my heart beats a little faster every single time your name pops up on my screen? 💓",
        buttons: [
            { text: "Mine does too! 👉👈", nextStep: 4 },
            { text: "I had a feeling... 🙈", nextStep: 4 }
        ]
    },
    {
        // Question 5 (Index 4)
        text: "If I promised to always hold your hand through dark days and celebrate all your wins, would you let me? 🤝",
        buttons: [
            { text: "I would love that 🌹", nextStep: 5 },
            { text: "Always, yes!", nextStep: 5 }
        ]
    },
    {
        // Question 6 (Index 5)
        text: "Would you mind if we wrote our own beautiful, infinite love story together? 📖",
        buttons: [
            { text: "Let's write it! ✍️", nextStep: 6 },
            { text: "No, I'd hate it", nextStep: 5, type: "runaway" } // Stays on same step if clicked
        ]
    },
    {
        // Question 7 (Index 6)
        text: "Are you ready for the most important, heart-pounding question of my life? 👉👈",
        buttons: [
            { text: "Yes, tell me! 😍", nextStep: 7 },
            { text: "No, skip", nextStep: 6, type: "runaway" }
        ]
    },
    {
        // Question 8 (Index 7) - The Grand Proposal!
        text: "Shagufta, you deserve the absolute best in this world. Will you do me, Jatinder, the honor of being my partner? 💍",
        buttons: [
            { text: "YES! A million times! 😍", nextStep: 9 }, // Jumps straight to success screen
            { text: "No 😢", nextStep: 8, type: "runaway" }    // Leads to guilt trip
        ]
    },
    {
        // Question 9 (Index 8) - Guilt Trip (Infinite loop if they try to bypass runaway)
        text: "Wait... did you just try to click No? Look at my eyes, Shagufta. Are you absolutely sure? 🥺",
        buttons: [
            { text: "Okay fine, Yes! ❤️", nextStep: 9 },
            { text: "Yes, I am sure", nextStep: 8, type: "runaway" }
        ]
    },
    {
        // Question 10 (Index 9) - Success Screen
        text: "Yay! 🎉 Shagufta & Jatinder, forever and always. You have made me the happiest guy alive! Check your phone! ❤️",
        buttons: [
            { text: "Our Forever Starts Now 👩‍❤️‍👨", nextStep: -1 }
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
        
        // Handle runaway behavior
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
