// START SURPRISE

function startSurprise() {
    showScreen("passwordScreen");
}


// SECRET CODE

const secretPassword = "kuchupuchu";


function checkPassword() {

    const input = document
        .getElementById("passwordInput")
        .value
        .trim()
        .toLowerCase();

    const message = document
        .getElementById("passwordMessage");


    if (input === secretPassword) {

        message.innerHTML = "Correct! ❤️";

        setTimeout(function () {

            showScreen("questionScreen");

        }, 800);

    } else {

        message.innerHTML =
            "Wrong code 👀 Try again.";

    }
}


// QUESTIONS

let questionNumber = 0;

const questions = [

    "Are you ready for the real surprise? 👀",

    "Do you think I would actually forget you? 😂",

    "Do you know how important you are? ❤️"

];


function nextQuestion() {

    questionNumber++;

    if (questionNumber < questions.length) {

        document
            .getElementById("questionText")
            .innerText = questions[questionNumber];

    } else {

        showScreen("memoryScreen");

    }
}


// MEMORY MESSAGES

let memoryNumber = 0;

const memories = [

    "Some people come into our lives unexpectedly...",

    "Then slowly become an important part of our story. ❤️",

    "And before we realize it, we have created countless memories together.",

    "That's why I wanted to make this little surprise for you. ✨",

    "Because you deserve to know that you're special. 🫶",

    "i have only one female bestfriend in my life and its youu philawanri.🐣"

];


function nextMemory() {

    memoryNumber++;

    if (memoryNumber < memories.length) {

        document
            .getElementById("memoryText")
            .innerText = memories[memoryNumber];

    } else {

        showScreen("finalScreen");

        createConfetti();

    }
}


// CHANGE SCREEN

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");


    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    document
        .getElementById(screenId)
        .classList.add("active");

}


// CONFETTI

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");


        confetti.innerHTML = "✨";


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-20px";


        confetti.style.fontSize =
            Math.random() * 20 + 10 + "px";


        confetti.style.zIndex =
            "9999";


        document.body.appendChild(confetti);


        const duration =
            Math.random() * 3000 + 2000;


        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",

                    opacity: 0
                }

            ],

            {
                duration: duration,
                easing: "linear"
            }

        );


        setTimeout(function() {

            confetti.remove();

        }, duration);

    }

}