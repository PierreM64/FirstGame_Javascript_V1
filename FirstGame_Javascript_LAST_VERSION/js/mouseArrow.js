let mousePos = {};
let buttnMouse=0;
let buttnArrow=1;
let buttnPlay=1;
let booster =1;
let buttnMusic=0;   //normalement 1

function traiteMouseDown(event) {
    console.log("Souris clickée dans le canvas " + event.button);
    //console.log("clickée en x=" + mousePos.x + ", y= " +mousePos.y);

    //exemple d'utilisation d'API du DOM pour modifer du contenu HTML

    switch (etatJeu) {
        case "MenuPrincipal":
            etatJeu ="JeuEnCours";
            spanNiveau.innerHTML= "<b>1</b>";
            break;
        case "JeuEnCours" :
            break;
        case "ChangementNiveau":
            eventChangeLevel()
            break;
        case "GameOver" :
            eventGameOver();
            break;
        case "Restart" :
            eventRestart();
            break;
    }

}

function traiteMouseUp(event) {
    //console.log("Souris relachée dans le canvas" + event.button);
}

function traiteMouseMove(event) {
    //console.log("Souris deplacée dans le canvas en x="+mousePos.x+" & en y=" +mousePos.y);
    //pour prendre ne compte les maarges, le css, etc
    var rect = canvas.getBoundingClientRect();

    mousePos.x =event.clientX - rect.left;
    mousePos.y = event.clientY - rect.top;

    //le monstre bouge avec la souris
    //-- TRACKER Souris --//
    if (buttnMouse===1 && buttnPlay===1 ) { monstre.setPos(mousePos.x, mousePos.y) };
    //NE FONCTIONNE QUE SI LE JEU EST EN MODE PLAY & BOUTON SOURIS ACTIVER
    
}

//- Mouvement au clavier -//
function traiteKeyDown(event) {
    console.log("Souris/Bouton enfoncée dans le canvas" + event.key);
    if (buttnPlay===1) { //JEU JOUABLE UNIQUEMENT EN MODE PLAY
        switch (event.key) {
            //Direction Flèches Clavier
            case "ArrowLeft" :
                monstre.vitesseX = -5;
                break;
            case "ArrowRight" :
                monstre.vitesseX = 5;
                break;
            case "ArrowUp" :
                monstre.vitesseY = -5;
                break;
            case "ArrowDown" :
                monstre.vitesseY = 5;
                break;

            //Direction ZQSD (clavier AZERTY) 
                //-> changer les lettres WASD pour clavier QWERTY
            case "q":
            case "Q":   //Au cas ou majuscule est activé par innavertance
                monstre.vitesseX = -5*booster;
                break;
            case "d":
            case "D":
                monstre.vitesseX = 5*booster;
                break;
            case "z":
            case "Z":
                monstre.vitesseY = -5*booster;
                break;
            case "s":
            case "S":
                monstre.vitesseY = 5*booster;
                break;
        }
    }
    switch (event.key) {
        //Déclenchement du GAME
        case " ":
        case "s":
        case "S":
            switch (etatJeu) {
                case "MenuPrincipal":
                    etatJeu ="JeuEnCours";
                    break;
                case "ChangementNiveau":
                    eventChangeLevel();
                    break;
                case "GameOver" :
                    eventGameOver();
                    break;
                case "Restart" :
                    eventRestart();
                    break;
            }
            break;
        
        //Faire PLAY/PAUSE
        case "p":
        case "P":
            if (buttnPlay===1) { buttnPlay=0}
            else {buttnPlay=1}

            if (buttnPlay===0) { //si PAUSE
                console.log("buttnPlay= "+buttnPlay);
                //etatJeu="Pause";
                //afficheEcranPause();
                colorPause="#FF866A";   //#FF4500
                gamePause();
            } else {               //si PLAY
                console.log("buttnPlay= "+buttnPlay);
                colorPause="transparent";
                gamePlay();
            }

            break;
        case "r":
        case "R" :
            if (buttnPlay ===0) {
                //si on est en pause on RESTART
                console.log("restart !");
                colorPause="transparent";
                gameRestart();
                etatJeu = "Restart";

                assets.musicNextLevel.stop();
                levelMusicStop();
                assets.musicRestart.play();
                titleMusic="musicRestart";
            }
            break;
        case "b" :
        case "B" :
            booster=2;
            break;
    }
}
function traiteKeyUp(event) {
    //console.log("Souris/bouton relachée dans le canvas" + event.key);
    switch (event.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "q":
        case "Q":
        case "d":
        case "D":
            monstre.vitesseX = 0;
            break;
        case "ArrowUp":
        case "ArrowDown":
        case "z":
        case "Z":
        case "s":
        case "S":
            monstre.vitesseY = 0;
            break;
        case "b" :
        case "B" :
            booster=1;
            break;
    }
}

function buttonMouse() {
    buttnArrow=0;
    buttnMouse=1;
    document.getElementById('buttonMouse').style.background="rgba(174, 145, 82, 0.782)";  
    /*document.getElementById('buttonArrow').style.background="#FFCB60";  ///rgba(247, 196, 29, 0.782) */

    document.getElementById('buttonArrow').style.backgroundColor= "#a38560";
    document.getElementById('buttonArrow').style.backgroundImage= "linear-gradient(315deg, #a38560 0%, #FFCB60 80%)";
}

function buttonArrow() {
    buttnMouse=0;
    buttnArrow=1;
    document.getElementById('buttonArrow').style.background="rgba(174, 145, 82, 0.782)";    //btn enfoncé

    //btn relevé
    document.getElementById('buttonMouse').style.backgroundColor= "#a38560";
    document.getElementById('buttonMouse').style.backgroundImage= "linear-gradient(315deg, #a38560 0%, #FFCB60 80%)";
    /*document.getElementById('buttonMouse').style.background="#FFCB60";                  //btn relevé  */
}

//FONCTION ON/OFF MUSIC
function buttonMusic() {
    if (buttnMusic===1) { buttnMusic=0}
    else {buttnMusic=1}
    console.log("Music ON/OFF");

    switch (titleMusic) {
        case "musicStart":
            if (buttnMusic===0) {assets.musicStart.pause()}
            else {assets.musicStart.play()}
            break;
        case "musicNextLevel" :
            if (buttnMusic===0) {assets.musicNextLevel.pause()}
            else {assets.musicNextLevel.play()}
            break;
        case "musicDawnNewWord":
            if (buttnMusic===0) {assets.musicDawnNewWord.pause()}
            else {assets.musicDawnNewWord.play()}
            break;
        case "musicPurpleNight":
            if (buttnMusic===0) {assets.musicPurpleNight.pause()}
            else {assets.musicPurpleNight.play()}
            break;
        case "musicLastLevel":
            if (buttnMusic===0) {assets.musicLastLevel.pause()}
            else {assets.musicLastLevel.play()}
            break;
        case "musicStarryNight":
            if (buttnMusic===0) {assets.musicStarryNight.pause()}
            else {assets.musicStarryNight.play()}
            break;
        case "musicGameOver":
            if (buttnMusic===0) {assets.musicGameOver.pause()}
            else {assets.musicGameOver.play()}
            break;
        case "musicRestart":
            if (buttnMusic===0) {assets.musicRestart.pause()}
            else {assets.musicRestart.play()}
            break;
    }
}

//-- EVENT FUNCTION --//
function eventGameOver() {
    vies =vieMax;
    score=0;
    etatJeu = "JeuEnCours";
    spanNiveau.innerHTML= "<b>1</b>";
    niveau=0;

    assets.musicGameOver.stop();
    niveauSuivant();
}
function eventRestart() {
    buttnPlay=1;

    assets.musicRestart.stop();
    eventGameOver();
    /*
    vies=vieMax;
    score=0;
    etatJeu ="JeuEnCours";
    //spanNiveau.innerHTML= "<b>1</b>";
    niveau=0;
    niveauSuivant();
    */
}
function eventChangeLevel() {
    if (buttnPlay===1) {
        niveauSuivant();
        etatJeu = "JeuEnCours";
    }
}
