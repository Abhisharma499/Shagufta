const storySteps = [

  {

    text: "Hey Shagufta... ❤️\n\nCan I steal just 2 minutes of your time?\n\nI've been carrying something in my heart for a while, but instead of saying it directly, I thought I'd ask you a few questions first.\n\nPromise me you'll answer honestly? 🤍",

    buttons: [

      { text: "I promise ❤️", nextStep: 1 },

      { text: "I'm curious 😊", nextStep: 1 }

    ]

  },



  {

    text: "Imagine you suddenly had a completely free evening this week... ✨\n\nWhat would make you happiest?",

    buttons: [

      { text: "Something fun 🎉", nextStep: 2 },

      { text: "Trying something new 😍", nextStep: 2 }

    ]

  },



  {

    text: "Do you think the best memories are the ones we plan... or the ones that happen unexpectedly with the right person? 💫",

    buttons: [

      { text: "Unexpected ones ❤️", nextStep: 3 },

      { text: "With the right person 🥰", nextStep: 3 }

    ]

  },



  {

    text: "Be honest... 😊\n\nIf I planned a surprise just for you, would you trust me enough to come along without knowing every detail? 🤍",

    buttons: [

      { text: "Maybe 😄", nextStep: 4 },

      { text: "I think I would ❤️", nextStep: 4 }

    ]

  },



  {

    text: "What's your idea of a perfect evening?",

    buttons: [

      { text: "Laugh until my cheeks hurt 😂", nextStep: 5 },

      { text: "Deep conversations over dinner 🍝", nextStep: 5 }

    ]

  },



  {

    text: "If we were together right now... what do you think we'd probably be doing? 😊",

    buttons: [

      { text: "Laughing 😂", nextStep: 6 },

      { text: "Looking for food 🍕", nextStep: 6 }

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

    text: "I know an amazing trampoline park where we can jump around like little kids, challenge each other, laugh until we can't breathe and completely forget about everything else. 🤸✨",

    buttons: [

      { text: "That sounds amazing 😍", nextStep: 8 },

      { text: "Go on... ❤️", nextStep: 8 }

    ]

  },



  {

    text: "And after we've burned all that energy... 😄\n\nWe'll go for dinner, talk about absolutely everything, laugh at silly things and hopefully create one of those memories we'll never forget. 🍽️🌙",

    buttons: [

      { text: "That sounds perfect ❤️", nextStep: 9 },

      { text: "I love that 🥰", nextStep: 9 }

    ]

  },



  {

    text: "Okay... 🥹❤️\n\nEvery question you've answered was quietly leading to this moment.\n\nI'd really love to take you on that trampoline date followed by dinner.\n\nNot because it's fancy...\n\nBut because I honestly believe even the simplest moments become special when they're spent with you.\n\nSo...\n\nWill you let me take you out? 🤍",

    buttons: [

      { text: "YES!! ❤️🥹", nextStep: 10 },

      { text: "Let me think 😊", nextStep: 14 }

    ]

  },



  {

    text: "🎉 DATE ACCEPTED! 🎉\n\nCongratulations!! 🥳\n\nYou've officially unlocked:\n\n🤸 One trampoline adventure.\n🍕 Unlimited delicious food.\n😂 Endless laughter.\n📸 Too many cute pictures.\n❤️ One very excited guy who's already looking forward to seeing you.\n\n⚠️ Warning:\nThis date may cause butterflies, random smiling and the urge to plan another one. 😄",

    buttons: [

      { text: "Continue ❤️", nextStep: 11 }

    ]

  },



  {

    text: "There's something I've wanted to tell you... ❤️\n\nThis wasn't really about the trampoline park.\n\nOr the dinner.\n\nIt was simply my excuse to tell you that somewhere between our conversations, your smile, your kindness and the way you make ordinary moments feel different...\n\nYou quietly became someone very special to me.\n\nI genuinely look forward to talking to you.\n\nYou make my day a little brighter without even trying.\n\nAnd I'd love the chance to make many more memories with you. 🤍",

    buttons: [

      { text: "❤️", nextStep: 12 }

    ]

  },



  {

    text: "One last question... 😊❤️",

    buttons: [

      { text: "Ask me 🤍", nextStep: 13 }

    ]

  },



  {

    text: "Would you make me the happiest guy...\n\nand let this be the beginning of something beautiful between us? 🌸❤️",

    buttons: [

      { text: "Yes ❤️🥹", nextStep: 15 },

      { text: "Let's find out together 🥰", nextStep: 15 }

    ]

  },



  {

    text: "That's completely okay. ❤️\n\nI never made this because I wanted to pressure you.\n\nI made it because I wanted you to know how genuinely special you are to me.\n\nTake all the time you need.\n\nMy invitation—and my feelings—will still be here whenever you're ready. 🤍",

    buttons: [

      { text: "Thank you ❤️", nextStep: -1 }

    ]

  },



  {

    text: "❤️ Mission Complete ❤️\n\nAchievement Unlocked:\n✨ The Beginning of Our Story ✨\n\nRewards:\n🤍 Countless memories waiting to be made.\n😂 Terrible jokes you'll have to tolerate.\n🍟 Me stealing one bite of your food.\n📸 Lots of selfies.\n❤️ And one guy who's incredibly lucky to have met you.\n\nNow close this page...\n\nBecause I can't wait to make the next chapter happen in real life. 🥹❤️",

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
