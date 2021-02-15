let tableauDesVitessesX = [];
let tableauDesVitessesY = [];

function gamePause(event) {
    tableauDesBalles.forEach ((b) => {
        tableauDesVitessesX.push(b.vitesseX);
        tableauDesVitessesY.push(b.vitesseY);
        b.vitesseX=0;
        b.vitesseY=0;
    });


    //gradient givrée sur balleChercheuse
    /*
    let grd = ctx.createLinearGradient(x0,y0,x1,y1);
    let grd = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    grd.addColorStop(0, #f0bb60e8);
    grd.addColorStop(1, #4aa484e5);
    ctx.fillStyle =grd;
    */

    //balleChercheuse devient bleu en PAUSE
    balleChercheuse.couleur=grd;
    /*linear-gradient(rgba(196, 219, 240, 0.5), rgba(85, 159, 228, 1))*/
    //voir arret de la balle chercheuse dans la fonction updateJeu() de script.js

    //etatJeu= "Pause";
    
}
function gamePlay() {
    for (let i=0; i<tableauDesVitessesX.length; i++) {
        let b = tableauDesBalles[i];
        b.vitesseX=tableauDesVitessesX[i];
        b.vitesseY=tableauDesVitessesY[i];
    };
    tableauDesVitessesX.splice(0, tableauDesVitessesX.length);
    tableauDesVitessesY.splice(0, tableauDesVitessesY.length);

    balleChercheuse.couleur="darkviolet";
    
}
function gameRestart() {
    tableauDesVitessesX.splice(0, tableauDesVitessesX.length);
    tableauDesVitessesY.splice(0, tableauDesVitessesY.length);

    restart=1;
}