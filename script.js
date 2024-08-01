function changeText() {
    let textToChange = document.querySelector(".change-text");
    const greeters = [
        "Terefektif!",
        "Hemat Internet!",
        "Bisa Belajar Dari Mana Saja!",

    ];
    let i = 0;
    let speed = 100;
    setInterval(() => {
        if (i > -1) {
            let randomNumber = Math.floor(Math.random() * greeters.length);
            let j = 0;
            textToChange.innerHTML = "";
            function typeWriter() {
                if (j < greeters[randomNumber].length) {
                    textToChange.innerHTML += greeters[randomNumber].charAt(j);
                    j++;
                }
                setTimeout(typeWriter, speed);
            }
            typeWriter();
        }
        i++;
    }, 3000);
}
changeText();
