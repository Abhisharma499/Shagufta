const storySteps = [
  {
    text: "Hey Shagufta 😊 I have a tiny surprise for you... Will you answer my questions honestly till the end? 🤍",
    buttons: [
      { text: "Promise! 🥰", nextStep: 1 },
      { text: "I'm ready 😄", nextStep: 1 }
    ]
  },
  {
    text: "If you suddenly got a free evening this week, what would you love to do the most? ✨",
    buttons: [
      { text: "Something fun 🎉", nextStep: 2 },
      { text: "Try something new 😍", nextStep: 2 }
    ]
  },
  {
    text: "Do you think life is more fun when you make random memories instead of just planning them? 💫",
    buttons: [
      { text: "Absolutely ❤️", nextStep: 3 },
      { text: "Yes, definitely 😊", nextStep: 3 }
    ]
  },
  {
    text: "Be honest... if I planned a fun surprise, would you trust me enough to come along? 😌",
    buttons: [
      { text: "Maybe 😄", nextStep: 4 },
      { text: "I think so 🤭", nextStep: 4 }
    ]
  },
  {
    text: "What's more your style—laughing until your cheeks hurt or having deep conversations over delicious food? 😋",
    buttons: [
      { text: "Laughing 😂", nextStep: 5 },
      { text: "Good food 🍝", nextStep: 5 }
    ]
  },
  {
    text: "What if I told you... we don't have to choose just one? 😉",
    buttons: [
      { text: "Now I'm curious 👀", nextStep: 6 },
      { text: "Tell me! 🤍", nextStep: 6 }
    ]
  },
  {
    text: "I know a place where we can jump around like kids, laugh at each other, and forget about everything for a while. 🤸✨",
    buttons: [
      { text: "That sounds fun 😍", nextStep: 7 },
      { text: "Go on... 😊", nextStep: 7 }
    ]
  },
  {
    text: "And after we've burned all that energy, we can reward ourselves with a nice dinner and lots of conversations. 🍽️🌙",
    buttons: [
      { text: "Sounds perfect ❤️", nextStep: 8 },
      { text: "I'm listening 🤭", nextStep: 8 }
    ]
  },
  {
    text: "So... Shagufta, would you make me the happiest guy and let me take you to a trampoline park followed by dinner? 🥹❤️",
    buttons: [
      { text: "Yes! I'd love to ❤️", nextStep: 9 },
      { text: "Let me think 😊", nextStep: 10 }
    ]
  },
  {
    text: "Yay!! 🎉 I promise we'll have an amazing time, make unforgettable memories, and I'll make sure you leave with a big smile. ❤️",
    buttons: [
      { text: "Let's do it! 🥰", nextStep: -1 }
    ]
  },
  {
    text: "No pressure at all. 😊 I just wanted to ask because I genuinely enjoy spending time with you. Whenever you're comfortable, the invitation will still be there. 🤍",
    buttons: [
      { text: "Thank you ❤️", nextStep: -1 }
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
