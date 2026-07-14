const storySteps = [
  {
    text: "Hey Shagufta... ❤️\n\nThere's something I've wanted to tell you for a while, but before I do, can I ask you a few honest questions?\n\nThey're simple... but every answer means something to me. 🤍",
    buttons: [
      { text: "I'll answer honestly 😊", nextStep: 1 },
      { text: "Okay... I'm curious ❤️", nextStep: 1 }
    ]
  },

  {
    text: "Imagine you suddenly had a completely free evening this week... ✨\n\nWhat's the first thing you'd want to do?",
    buttons: [
      { text: "Something fun 🎉", nextStep: 2 },
      { text: "Try something new 😍", nextStep: 2 }
    ]
  },

  {
    text: "Do you think the best memories are usually the ones that aren't planned... but simply happen with the right person? 💫",
    buttons: [
      { text: "Absolutely ❤️", nextStep: 3 },
      { text: "I really do 😊", nextStep: 3 }
    ]
  },

  {
    text: "Be completely honest... 😌\n\nIf I planned a surprise just for you, would you trust me enough to come along without knowing every little detail? 🤍",
    buttons: [
      { text: "Maybe 😄", nextStep: 4 },
      { text: "I think I would ❤️", nextStep: 4 }
    ]
  },

  {
    text: "What's more your style? 😊",
    buttons: [
      { text: "Laugh until my cheeks hurt 😂", nextStep: 5 },
      { text: "Deep conversations over good food 🍝", nextStep: 5 }
    ]
  },

  {
    text: "One more question... 😊\n\nIf we were together right now, what do you think we'd be doing?",
    buttons: [
      { text: "Laughing at something silly 😂", nextStep: 6 },
      { text: "Looking for amazing food 🍕", nextStep: 6 }
    ]
  },

  {
    text: "What if I told you... we don't actually have to choose between the two? 😉",
    buttons: [
      { text: "Now I'm curious 👀", nextStep: 7 },
      { text: "Tell me ❤️", nextStep: 7 }
    ]
  },

  {
    text: "I know a place where we can jump around like little kids, laugh at each other, make silly memories and forget the rest of the world for a while. 🤸✨",
    buttons: [
      { text: "That sounds amazing 😍", nextStep: 8 },
      { text: "Go on... ❤️", nextStep: 8 }
    ]
  },

  {
    text: "And after we've completely exhausted ourselves... 😄\n\nWe'll end the evening with a nice dinner, good conversations, and hopefully a memory that makes us smile every time we think about it. 🌙🍽️",
    buttons: [
      { text: "I love that ❤️", nextStep: 9 },
      { text: "Sounds perfect 🥰", nextStep: 9 }
    ]
  },

  // Weekend Selection
  {
    text: "Looks like we're actually planning this... 😏❤️\n\nSo tell me...\n\nWhich weekend should become *our* weekend? 📅",
    buttons: [
      { text: "This Weekend 🌸", nextStep: 10 },
      { text: "Next Weekend ✨", nextStep: 11 }
    ]
  },

  // This Weekend Calendar
  {
    text: "Perfect! ❤️\n\nNow pick the exact day you'd like us to go.",
    calendar: true,
    button: {
      text: "Done ❤️",
      nextStep: 12
    }
  },

  // Next Weekend Calendar
  {
    text: "I like that choice. ❤️\n\nNow choose the exact date.",
    calendar: true,
    button: {
      text: "Done ❤️",
      nextStep: 12
    }
  },

  // Proposal
  {
    text: "Okay... here's what all these questions were leading to. 🥹❤️\n\nI'd really love to take you on a trampoline date followed by dinner.\n\nNot because it's fancy...\n\nBut because I genuinely think every moment spent with you becomes a little more special.\n\nSo... will you let me take you out? 🤍",
    buttons: [
      { text: "YES ❤️🥹", nextStep: 13 },
      { text: "Let me think 😊", nextStep: 16 }
    ]
  },

  // YES
  {
    text: "🎉 DATE CONFIRMED! 🎉\n\nCongratulations! 🥳\n\nYou've officially unlocked:\n\n🤸 One trampoline adventure.\n🍕 One delicious dinner.\n😂 Unlimited laughter.\n📸 Too many cute photos.\n❤️ One very excited guy who's already looking forward to seeing you.\n\n(Please note: Side effects may include smiling for no reason after the date. 😄)",
    buttons: [
      { text: "Continue ❤️", nextStep: 14 }
    ]
  },

  // Confession
  {
    text: "There's one last thing... ❤️\n\nThe truth is...\n\nThis was never just about a trampoline park or dinner.\n\nIt was my way of telling you that I genuinely enjoy every conversation we have.\n\nI smile when your name pops up.\n\nI look forward to talking to you.\n\nAnd somewhere along the way... you became someone very special to me.\n\nI don't know what the future holds, but I'd really love the chance to create more memories with you. 🤍",
    buttons: [
      { text: "One last question... 😊", nextStep: 15 }
    ]
  },

  // Final Question
  {
    text: "Now that you know how I feel... ❤️\n\nWhat do you think?\n\nCould this be the beginning of something beautiful between us? 🌸",
    buttons: [
      { text: "I hope so ❤️", nextStep: -1 },
      { text: "Let's find out together 🥰", nextStep: -1 }
    ]
  },

  // THINK
  {
    text: "That's completely okay. ❤️\n\nI didn't create this to pressure you.\n\nI created it because I wanted you to know how special you are to me.\n\nTake all the time you need.\n\nWhenever you're ready, my invitation—and my feelings—will still be here. 🤍",
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
