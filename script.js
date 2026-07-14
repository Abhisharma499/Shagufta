const storySteps = [
  {
    text: "Hey Shagufta... ❤️\n\nCan I borrow just a few minutes of your time?\n\nI've been wanting to tell you something for a while, but I thought I'd do it a little differently. 😊\n\nFirst... promise me you'll answer a few questions honestly? 🤍",
    buttons: [
      { text: "I promise ❤️", nextStep: 1 },
      { text: "Okay... I'm curious 😊", nextStep: 1 }
    ]
  },

  {
    text: "If you suddenly had a completely free evening this week... ✨\n\nWhat would make you happiest?",
    buttons: [
      { text: "Something fun 🎉", nextStep: 2 },
      { text: "Trying something new 😍", nextStep: 2 }
    ]
  },

  {
    text: "Do you think the best memories are the ones we plan... or the ones that happen with the right person? 💫",
    buttons: [
      { text: "The right person ❤️", nextStep: 3 },
      { text: "Unexpected memories 🥰", nextStep: 3 }
    ]
  },

  {
    text: "Be honest... 😊\n\nIf I planned a surprise just for you, would you trust me enough to come without knowing every detail? 🤍",
    buttons: [
      { text: "Maybe 😄", nextStep: 4 },
      { text: "I think I would ❤️", nextStep: 4 }
    ]
  },

  {
    text: "Which sounds more like a perfect evening?",
    buttons: [
      { text: "Laugh until my cheeks hurt 😂", nextStep: 5 },
      { text: "Long conversations over dinner 🍝", nextStep: 5 }
    ]
  },

  {
    text: "Quick question... 😌\n\nIf we were together right now, what do you think we'd probably be doing?",
    buttons: [
      { text: "Laughing at something silly 😂", nextStep: 6 },
      { text: "Looking for good food 🍕", nextStep: 6 }
    ]
  },

  {
    text: "What if I told you...\n\nWe don't actually have to choose between those two? 😉",
    buttons: [
      { text: "Now I'm curious 👀", nextStep: 7 },
      { text: "Tell me ❤️", nextStep: 7 }
    ]
  },

  {
    text: "I know an amazing trampoline park where we can jump around like little kids, challenge each other, laugh at ourselves and completely forget the rest of the world for a while. 🤸✨",
    buttons: [
      { text: "That sounds amazing 😍", nextStep: 8 },
      { text: "I'm listening ❤️", nextStep: 8 }
    ]
  },

  {
    text: "And after we've burned all our energy... 😄\n\nWe'll reward ourselves with delicious food, endless conversations and hopefully create one of those memories we'll never forget. 🌙🍽️",
    buttons: [
      { text: "That sounds perfect ❤️", nextStep: 9 },
      { text: "I love that 🥰", nextStep: 9 }
    ]
  },

  {
    text: "One last planning question... 📅\n\nIf we really do this...\n\nWhich weekend should become OUR weekend? ❤️",
    buttons: [
      { text: "🌸 This Weekend", nextStep: 10 },
      { text: "✨ Next Weekend", nextStep: 10 },
      { text: "💖 Weekend After That", nextStep: 10 }
    ]
  },

  {
    text: "Okay... now I can't keep my secret anymore. 🥹❤️\n\nEvery question you've answered was quietly leading to this moment.\n\nI'd really love to take you on a trampoline date followed by dinner.\n\nNot because it's the fanciest plan...\n\nBut because I honestly think even the simplest moments become special when they're spent with you.\n\nSo...\n\nWill you let me take you out? 🤍",
    buttons: [
      { text: "YES!! ❤️🥹", nextStep: 11 },
      { text: "Let me think 😊", nextStep: 15 }
    ]
  },

  {
    text: "🎉 DATE ACCEPTED! 🎉\n\nCongratulations!! 🥳\n\nYou've officially unlocked:\n\n🤸 One trampoline adventure.\n🍕 One delicious dinner.\n😂 Unlimited laughing.\n📸 Way too many cute pictures.\n❤️ One extremely excited guy who's already counting the days.\n\nWarning:\n\nThis date may cause unexpected smiling, happy memories and the desire to plan another one. 😄",
    buttons: [
      { text: "Continue ❤️", nextStep: 12 }
    ]
  },

  {
    text: "There's one more thing I should probably confess... ❤️\n\nThis wasn't just about asking you out.\n\nIt was my way of telling you something I've been feeling for a while.\n\nSomewhere between our conversations, your smile, your kindness and the way you make ordinary moments feel different...\n\nYou quietly became someone very special to me.\n\nI genuinely look forward to talking to you.\n\nYou cross my mind more often than I'd like to admit.\n\nAnd honestly...\n\nI'd love the chance to know you even better. 🤍",
    buttons: [
      { text: "Aww... ❤️", nextStep: 13 }
    ]
  },

  {
    text: "One tiny bonus question... 🤭❤️",
    buttons: [
      { text: "Ask me 😊", nextStep: 14 }
    ]
  },

  {
    text: "After everything you've just read...\n\nDo you think this could be the beginning of something really beautiful between us? 🌸❤️",
    buttons: [
      { text: "I hope so ❤️", nextStep: 16 },
      { text: "Let's find out together 🥰", nextStep: 16 }
    ]
  },

  {
    text: "That's completely okay. ❤️\n\nI never wanted to pressure you.\n\nI just wanted you to know how genuinely special you are to me.\n\nTake all the time you need.\n\nThe invitation isn't going anywhere... and neither are my feelings. 🤍",
    buttons: [
      { text: "Thank you ❤️", nextStep: -1 }
    ]
  },

  {
    text: "❤️ Final Status ❤️\n\nMission: SUCCESSFUL ✅\n\nAchievement Unlocked:\n✨ Future Favorite Person\n\nNew Rewards:\n🤍 Unlimited memories together.\n😂 Lifetime supply of terrible jokes.\n🍟 Occasional food stealing.\n📸 Random selfies.\n🥹 One guy who's genuinely happy you said yes.\n\nNow close this page...\n\nBecause our real story starts outside of it. ❤️✨",
    buttons: [
      { text: "See You Soon ❤️", nextStep: -1 }
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
