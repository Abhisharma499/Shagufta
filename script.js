const storySteps = [
  {
    text: "Hey Shagufta 😊 Can I ask you something? Promise you'll answer honestly? 🤭",
    buttons: [
      { text: "Promise! 💕", nextStep: 1 },
      { text: "Go ahead 😄", nextStep: 1 }
    ]
  },
  {
    text: "What's your idea of a perfect day if you could spend it with someone you enjoy talking to? ✨",
    buttons: [
      { text: "Somewhere peaceful 🌸", nextStep: 2 },
      { text: "Fun & adventurous 🎉", nextStep: 2 }
    ]
  },
  {
    text: "If someone wanted to steal a few hours of your weekend, what would convince you? 😏",
    buttons: [
      { text: "Good company 😊", nextStep: 3 },
      { text: "Lots of food 😂", nextStep: 3 }
    ]
  },
  {
    text: "Be honest... do you think I make your day a little more interesting? 🤭",
    buttons: [
      { text: "Maybe... 😄", nextStep: 4 },
      { text: "Yes, you do 😊", nextStep: 4 }
    ]
  },
  {
    text: "If we randomly bumped into each other with nothing to do, what would you choose? ☕🍿🚶",
    buttons: [
      { text: "Grab coffee ☕", nextStep: 5 },
      { text: "Just walk & talk 🌇", nextStep: 5 }
    ]
  },
  {
    text: "Who's usually better at making plans—you or me? 😌",
    buttons: [
      { text: "Definitely you 😄", nextStep: 6 },
      { text: "Let's find out 😉", nextStep: 6 }
    ]
  },
  {
    text: "Suppose I planned something fun with zero boring moments... would you trust my planning skills? 😎",
    buttons: [
      { text: "I think so 😁", nextStep: 7 },
      { text: "Only if it's interesting 🤭", nextStep: 7 }
    ]
  },
  {
    text: "What's one place you've been wanting to visit but haven't gone yet? 🌸",
    buttons: [
      { text: "A cozy café ☕", nextStep: 8 },
      { text: "A nice movie 🎬", nextStep: 8 }
    ]
  },
  {
    text: "Hypothetically... if your favorite person invited you for coffee or a movie, would you say yes? 😇",
    buttons: [
      { text: "Maybe... 😉", nextStep: 9 },
      { text: "Depends who's asking 😄", nextStep: 9 }
    ]
  },
  {
    text: "Then I guess I'll have to be brave enough to ask you someday... until then, keep a little free time for me. 😊❤️",
    buttons: [
      { text: "Let's see 😄", nextStep: -1 }
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
