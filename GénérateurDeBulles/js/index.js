// Fonction pour désactiver le double click, pour éviter la selection du texte au click rapide pendant le jeu

document.onselectstart = new Function ("return false")

// Fonction qui recupère une piste audio dans le Html
let play = () => {
    let audioclick = document.getElementById("audioclick");
    audioclick.volume = 0.3
}

// Fonction qui permet l'affichage du compteur de points
const counterdisplay = document.getElementById("counterDisplay");
let counter = 0;

// Fonction qui crée la bulle, l'élement principal du jeu
const createBubble = () => {

    const bubble = document.createElement("span");
    const size = Math.random() * 300 + 100 + "px";
    const direction = Math.random() > 0.5 ? 1 : -1;

    document.body.appendChild(bubble);
    bubble.classList.add("bubble")

    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    bubble.style.setProperty("--left", Math.random() * 100 * direction + "%");

    bubble.addEventListener("click", () => {
        counter++;
        audioclick.play();
        counterdisplay.textContent = counter;
        bubble.remove()
    });

    // Timer pour détuire notre span, pour éviter au DOM d'être surchargée
    setTimeout( () => { 
        bubble.remove(); 
    }, 7000);
};

// Interval de la création de chaques bulles
setInterval(createBubble, 1000);




