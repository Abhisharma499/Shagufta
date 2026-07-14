<!-- STREAMING_CHUNK: Updating the script.js file with 10+ custom steps, negative alternative texts, and heart generator loop... -->
```javascript:Valentine's Proposal Logic:script.js
const storySteps = [
    {
        // Question 1 (Index 0)
        text: "Hey Shagufta... ❤️\n\nCan I steal just 2 minutes of your time?\n\nI've been carrying something in my heart for a while, but instead of saying it directly, I thought I'd ask you a few questions first.\n\nPromise me you'll answer honestly? 🤍",
        buttons: [
            { text: "I promise ❤️", nextStep: 1 },
            { text: "No, keeping secrets 🤫", nextStep: 1, type: "runaway" }
        ]
    },
    {
        // Question 2 (Index 1)
        text: "Imagine you suddenly had a completely free evening this week... ✨\n\nWhat would make you happiest?",
        buttons: [
            { text: "Something fun 🎉", nextStep: 2 },
            { text: "Staying home bored 🥱", nextStep: 2, type: "runaway" }
        ]
    },
    {
        // Question 3 (Index 2)
        text: "Do you think the best memories are the ones we plan... or the ones that happen unexpectedly with the right person? 💫",
        buttons: [
            { text: "Unexpected ones ❤️", nextStep: 3 },
            { text: "Boring planned ones 🙄", nextStep: 3, type: "runaway" }
        ]
    },
    {
        // Question 4 (Index 3)
        text: "Be honest... 😊\n\nIf I planned a surprise just for you, would you trust me enough to come along without knowing every detail? 🤍",
        buttons: [
            { text: "Maybe 😄", nextStep: 4 },
            { text: "No way, zero trust 🙅‍♀️", nextStep: 4, type: "runaway" }
        ]
    },
    {
        // Question 5 (Index 4)
        text: "What's your idea of a perfect evening?",
        buttons: [
            { text: "Laugh until my cheeks hurt 😂", nextStep: 5 },
            { text: "Sit in awkward silence 🤐", nextStep: 5, type: "runaway" }
        ]
    },
    {
        // Question 6 (Index 5)
        text: "If we were together right now... what do you think we'd probably be doing? 😊",
        buttons: [
            { text: "Laughing 😂", nextStep: 6 },
            { text: "Ignoring each other 🫥", nextStep: 6, type: "runaway" }
        ]
    },
    {
        // Question 7 (Index 6)
        text: "What if I told you...\n\nWe don't actually have to choose between those two? 😉",
        buttons: [
            { text: "Now I'm curious 👀", nextStep: 7 },
            { text: "I don't care 😒", nextStep: 7, type: "runaway" }
        ]
    },
    {
        // Question 8 (Index 7)
        text: "I know an amazing trampoline park where we can jump around like little kids, challenge each other, laugh until we can't breathe and completely forget about everything else. 🤸✨",
        buttons: [
            { text: "That sounds amazing 😍", nextStep: 8 },
            { text: "Sounds super boring 🥱", nextStep: 8, type: "runaway" }
        ]
    },
    {
        // Question 9 (Index 8)
        text: "And after we've burned all that energy... 😄\n\nWe'll go for dinner, talk about absolutely everything, laugh at silly things and hopefully create one of those memories we'll never forget. 🍽️🌙",
        buttons: [
            { text: "That sounds perfect ❤️", nextStep: 9 },
            { text: "Sounds like a nightmare 😩", nextStep: 9, type: "runaway" }
        ]
    },
    {
        // Question 10 (Index 9) - The Big Proposal!
        text: "Okay... 🥹❤️\n\nEvery question you've answered was quietly leading to this moment.\n\nI'd really love to take you on that trampoline date followed by dinner.\n\nNot because it's fancy...\n\nBut because I honestly believe even the simplest moments become special when they're spent with you.\n\nSo...\n\nWill you let me take you out? 🤍",
        buttons: [
            { text: "YES!! ❤️🥹", nextStep: 10 },
            { text: "No 😢", nextStep: 14, type: "runaway" }
        ]
    },
    {
        // Step 11 (Index 10)
        text: "🎉 DATE ACCEPTED! 🎉\n\nCongratulations!! 🥳\n\nYou've officially unlocked:\n\n🤸 One trampoline adventure.\n🍕 Unlimited delicious food.\n😂 Endless laughter.\n📸 Too many cute pictures.\n❤️ One very excited guy who's already looking forward to seeing you.\n\n\n⚠️ Warning:\nThis date may cause butterflies, random smiling and the urge to plan another one. 😄",
        buttons: [
            { text: "Continue ❤️", nextStep: 11 },
            { text: "Go back 🛑", nextStep: 11, type: "runaway" }
        ]
    },
    {
        // Step 12 (Index 11)
        text: "There's something I've wanted to tell you... ❤️\n\nThis wasn't really about the trampoline park.\n\nOr the dinner.\n\nIt was simply my excuse to tell you that somewhere between our conversations, your smile, your kindness and the way you make ordinary moments feel different...\n\nYou quietly became someone very special to me.\n\nI genuinely look forward to talking to you.\n\nYou make my day a little brighter without even trying.\n\nAnd I'd love the chance to make many more memories with you. 🤍",
        buttons: [
            { text: "❤️", nextStep: 12 },
            { text: "💔", nextStep: 12, type: "runaway" }
        ]
    },
    {
        // Step 13 (Index 12)
        text: "One last question... 😊❤️",
        buttons: [
            { text: "Ask me 🤍", nextStep: 13 },
            { text: "Don't ask 🙅‍♀️", nextStep: 13, type: "runaway" }
        ]
    },
    {
        // Step 14 (Index 13)
        text: "Would you make me the happiest guy...\n\nand let this be the beginning of something beautiful between us? 🌸❤️",
        buttons: [
            { text: "Yes ❤️🥹", nextStep: 15 },
            { text: "No thanks 😢", nextStep: 15, type: "runaway" }
        ]
    },
    {
        // Step 15 (Index 14)
        text: "That's completely okay. ❤️\n\nI never made this because I wanted to pressure you.\n\nI made it because I wanted you to know how genuinely special you are to me.\n\nTake all the time you need.\n\nMy invitation—and my feelings—will still be here whenever you're ready. 🤍",
        buttons: [
            { text: "Thank you ❤️", nextStep: -1 },
            { text: "Delete this 🙄", nextStep: -1, type: "runaway" }
        ]
    },
    {
        // Step 16 (Index 15)
        text: "❤️ Mission Complete ❤️\n\nAchievement Unlocked:\n✨ The Beginning of Our Story ✨\n\nRewards:\n🤍 Countless memories waiting to be made.\n😂 Terrible jokes you'll have to tolerate.\n🍟 Me stealing one bite of your food.\n📸 Lots of selfies.\n❤️ And one guy who's incredibly lucky to have met you.\n\nNow close this page...\n\nBecause I can't wait to make the next chapter happen in real life. 🥹❤️",
        buttons: [
            { text: "See You Soon ❤️", nextStep: -1 },
            { text: "Goodbye forever 😭", nextStep: -1, type: "runaway" }
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

/* STREAMING_CHUNK: Spawning dynamic falling emoji hearts... */
// Raining Hearts Spawner
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // collection of sweet, romantic symbols
    const romanticEmojis = ['❤️', '💖', '💝', '💕', '💗', '💓', '🌸', '✨'];
    heart.innerText = romanticEmojis[Math.floor(Math.random() * romanticEmojis.length)];
    
    // Random horizontal starting coordinates
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Vary the emoji sizes for depth
    const size = Math.random() * 1.5 + 0.6; // Scale ranges from 0.6rem to 2.1rem
    heart.style.fontSize = size + 'rem';
    
    // Vary falling speeds
    const duration = Math.random() * 4 + 4; // Ranges from 4 to 8 seconds
    heart.style.animationDuration = duration + 's';
    
    // Randomize opacity
    heart.style.opacity = Math.random() * 0.6 + 0.4;
    
    document.body.appendChild(heart);
    
    // Clear elements from DOM once they fall off the page
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Spawns a heart every 350 milliseconds
setInterval(createHeart, 350);
