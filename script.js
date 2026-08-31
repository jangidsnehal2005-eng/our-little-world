/* =========================
SECRET PASSWORD
========================= */

const correctPassword = "CHANGE_THIS";

/* =========================
PASSWORD SCREEN
========================= */

function showPassword() {

```
document
    .getElementById("password-screen")
    .style.display =
    "flex";
```

}

function hidePassword() {

```
document
    .getElementById("password-screen")
    .style.display =
    "none";
```

}

/* =========================
CHECK PASSWORD
========================= */

function checkPassword() {

```
const userPassword =
    document
        .getElementById("password-input")
        .value
        .trim();

const error =
    document
        .getElementById("password-error");


if (
    userPassword
        .toLowerCase()
    ===
    correctPassword
        .toLowerCase()
) {

    startCinematicIntro();

}

else {

    error.innerText =
        "Hmm... that's not the secret word 🥺";

    document
        .getElementById("password-input")
        .value =
        "";

}
```

}

/* =========================
CINEMATIC INTRO
========================= */

function startCinematicIntro() {

```
document
    .getElementById("password-screen")
    .style.display =
    "none";


document
    .getElementById("entrance")
    .style.display =
    "none";


const intro =
    document
        .getElementById("cinematic-intro");


intro.style.display =
    "flex";


const text =
    document
        .getElementById("cinematic-text");


const messages = [

    "Loading something made especially for you... ❤️",

    "Every little memory has a place here...",

    "Every smile...",

    "Every moment...",

    "And every reason I love you... ❤️"

];


let index = 0;


const interval =
    setInterval(() => {

        index++;


        if (
            index
            <
            messages.length
        ) {

            text.style.opacity =
                0;


            setTimeout(() => {

                text.innerText =
                    messages[index];


                text.style.opacity =
                    1;

            }, 500);

        }

        else {

            clearInterval(
                interval
            );


            setTimeout(() => {

                intro.style.display =
                    "none";


                document
                    .getElementById("website")
                    .style.display =
                    "block";


                window.scrollTo(
                    0,
                    0
                );

            }, 1500);

        }

    }, 2500);
```

}

/* =========================
ENTER WORLD
========================= */

function enterWorld() {

```
document
    .getElementById("memories")
    .scrollIntoView({

        behavior:
            "smooth"

    });
```

}

/* =========================
OPEN WHEN LETTERS
========================= */

const letters = {

```
miss: {

    title:
        "When You Miss Me 🥺",

    text:
        "If you're reading this because you miss me, then just know that somewhere, no matter what I'm doing, there is always a little part of me thinking about you. Until we meet again, consider this my little hug through the screen. 🫂❤️"

},


sad: {

    title:
        "When You're Sad 🫂",

    text:
        "Hey love, I know everything might feel a little heavy right now. You don't always have to be strong. Take your time, breathe and remember that you don't have to go through everything alone. I'm always on your side. ❤️"

},


stress: {

    title:
        "When You're Stressed 🤍",

    text:
        "Take a deep breath. You don't have to solve everything at once. One thing at a time, okay? You're doing better than you think you are and I'm always proud of you. 🤍"

},


sleep: {

    title:
        "When You Can't Sleep 🌙",

    text:
        "Close your eyes and imagine we're sitting somewhere peaceful together. No worries, no pressure, just us. Take a deep breath and let yourself rest. Tomorrow can wait for now. ❤️🌙"

}
```

};

/* =========================
OPEN LETTER
========================= */

function openLetter(type) {

```
document
    .getElementById("letter-title")
    .innerText =
    letters[type].title;


document
    .getElementById("letter-text")
    .innerText =
    letters[type].text;


document
    .getElementById("modal")
    .style.display =
    "flex";
```

}

function closeModal() {

```
document
    .getElementById("modal")
    .style.display =
    "none";
```

}

/* CLOSE MODAL */

window.onclick =
function(event) {

```
const modal =
    document
        .getElementById("modal");


if (
    event.target
    ===
    modal
) {

    closeModal();

}
```

};

/* =========================
REASONS I LOVE YOU
========================= */

const reasons = [

```
"Because you can make me smile even when I don't feel like smiling.",

"Because being with you feels like having a favourite place.",

"Because you are you, and somehow that became one of my favourite things in the world.",

"Because you make ordinary moments feel special.",

"Because you make me laugh.",

"Because I love the little things about you that nobody else notices.",

"Because somehow, my favourite memories always seem to include you.",

"Because you make my world a little better just by being in it.",

"Because no matter how many reasons I write, I'll probably always find more."
```

];

function showReason() {

```
const random =

    Math.floor(
        Math.random()
        *
        reasons.length
    );


document
    .getElementById("reason")
    .innerText =
    reasons[random];
```

}

/* =========================
FINAL LETTER
========================= */

function showFinalLetter() {

```
document
    .getElementById("letter-title")
    .innerText =
    "To You ❤️";


document
    .getElementById("letter-text")
    .innerText =
    "I made this little world because sometimes words disappear too quickly in conversations. I wanted to create a place where you could always come back and remember how much you mean to me. Every memory, every little message and every part of this website exists because somewhere along the way, you became a very important part of my world. And I hope, whenever you visit this little corner of the internet, you remember that you are loved. Always. ❤️";


document
    .getElementById("modal")
    .style.display =
    "flex";
```

}
