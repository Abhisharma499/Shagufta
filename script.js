const storySteps = [
  {
    text: "Hey Shagufta... 😊❤️\n\nBefore I tell you something I've been secretly planning 😏, can you promise to answer a few questions honestly?\n\nNo overthinking allowed! 🤍",
    buttons: [
      { text: "Promise 😇", nextStep: 1 },
      { text: "Challenge accepted 😏", nextStep: 1 }
    ]
  },

  {
    text: "Imagine you suddenly got a free evening this week... ✨\n\nWhat's the first thing you'd love to do?",
    buttons: [
      { text: "Something fun 🎉", nextStep: 2 },
      { text: "Try something new 😍", nextStep: 2 }
    ]
  },

  {
    text: "Do you think the best memories are the ones you never planned? 💫",
    buttons: [
      { text: "Absolutely ❤️", nextStep: 3 },
      { text: "100% 😄", nextStep: 3 }
    ]
  },

  {
    text: "Be honest... 😌\n\nIf I planned a surprise for you, would you trust me enough to come along without asking too many questions? 🤭",
    buttons: [
      { text: "Maybe 😄", nextStep: 4 },
      { text: "I think so ❤️", nextStep: 4 }
    ]
  },

  {
    text: "What's more your style? 😊",
    buttons: [
      { text: "Laugh until my cheeks hurt 😂", nextStep: 5 },
      { text: "Deep conversations over delicious food 🍝", nextStep: 5 }
    ]
  },

  {
    text: "Quick question... 😌\n\nIf we were hanging out right now, what do you think we'd be doing?",
    buttons: [
      { text: "Laughing at something silly 😂", nextStep: 6 },
      { text: "Looking for amazing food 🍕", nextStep: 6 }
    ]
  },

  {
    text: "What if I told you... we don't actually have to choose just one? 😉",
    buttons: [
      { text: "Now I'm curious 👀", nextStep: 7 },
      { text: "Tell me! ❤️", nextStep: 7 }
    ]
  },

  {
    text: "I know a place where we can jump around like little kids, laugh at each other, compete in silly challenges, and forget about everything for a while. 🤸✨",
    buttons: [
      { text: "That sounds amazing 😍", nextStep: 8 },
      { text: "Go on... 🤭", nextStep: 8 }
    ]
  },

  {
    text: "And once we're completely exhausted... 😄\n\nWe'll reward ourselves with a delicious dinner, lots of conversations, and hopefully make one of those memories we'll laugh about for years. 🍽️🌙",
    buttons: [
      { text: "That sounds perfect ❤️", nextStep: 9 },
      { text: "I'm listening 👀", nextStep: 9 }
    ]
  },

  // Calendar Step
  {
    text: "Before I officially ask... 📅\n\nIf this actually happens, which day would you like to go? ❤️",
    calendar: true,
    button: {
      text: "I've picked a date ❤️",
      nextStep: 10
    }
  },

  {
    text: "Okay... moment of truth. 🥹❤️\n\nWill you let me take you on a trampoline date followed by dinner and let me try to make it one of your favorite memories?",
    buttons: [
      { text: "YES!! ❤️🥹", nextStep: 11 },
      { text: "Let me think 😊", nextStep: 12 }
    ]
  },

  // YES ENDING
  {
    text:
`🚨 DATE APPLICATION APPROVED! 🚨

Congratulations!! 🥳🎉

You have officially agreed to spend time with one slightly overexcited guy.

Please be aware of the following possible side effects:

🤸 Random trampoline competitions.
😂 Excessive laughing.
🍟 Me trying to steal one bite from your food.
📸 Too many cute pictures.
❤️ Accidentally creating one of our favorite memories.

Terms & Conditions:
• No refunds.
• No cancellations.
• Unlimited smiles included.

See you on our date! 😌💖`,
    buttons: [
      { text: "I accept the terms 😂❤️", nextStep: -1 }
    ]
  },

  // THINK ENDING
  {
    text:
`Hmm... 🤔

I'll allow exactly ONE overthinking session. 😄

Take your time...

Just remember, this invitation doesn't expire anytime soon, because spending time with you is worth waiting for. ❤️

(But don't make me wait until we're both grandparents. 👵👴😂)`,
    buttons: [
      { text: "Deal ❤️", nextStep: -1 }
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
