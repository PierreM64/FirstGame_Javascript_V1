//--- Fichier concernat les fonctions sur :   ---//
//---  le score, la vie & les niveaux         ---//

//Affichage du score & couleur en fonction de celui-ci
//et permet de l'update également dans la page html
function scoreColor(score) {
    if (score<0) {
        spanScore.innerHTML= "<b style='color:red'>"+ score + "</b>";
    } else if (score>0){
        spanScore.innerHTML= "<b style='color:green'>"+ score + "</b>";
    } else {
        spanScore.innerHTML= "<i style='color:orange'>"+ score + "</i>";
    }
}
function vieColor(vies) {
    /*
    if (vies>=5) {  
        spanVie.innerHTML= "<b style='color:green'>"+ vies + "</b>";
    } else if (vies<=2){
        spanVie.innerHTML= "<b style='color:red'>"+ vies + "</b>";
    } 
    else {
        spanVie.innerHTML= "<i style='color:orange'>"+ vies + "</i>";
    }*/

    switch (true) { //vieMax=6;
        case (vies<0):
            vies=0;
            spanVie.innerHTML= "<b style='color:red'>"+ vies + "</b>";
            break;
        case (0<=vies<=2) :
            spanVie.innerHTML= "<b style='color:red'>"+ vies + "</b>";
            break;
        case (2<vies<5) :
            spanVie.innerHTML= "<b style='color:orange'>"+ vies + "</b>";
            break;
        case (5<=vies<7) :
            spanVie.innerHTML= "<b style='color:green'>"+ vies + "</b>";
            break;
        case (7<=vies<10) :
            spanVie.innerHTML= "<b style='color:blue'>"+ vies + "</b>";
            break;
        case (vies>=10) : 
            spanVie.innerHTML= "<b style='color:purple'>"+ vies + "</b>";
            break;
    }
    
}

//chaque niveau terminé incrémente le score d'une certaine quantité de point
function scoreNiveau(niveau) {
    switch (true) {
        case (niveau<=10) :
            score += 5;
            break;
        case (10<niveau<=20) :
            score += 10;
            break;
        case (20<niveau<=30) :
            score += 15;
            break;
        case (30<niveau<=40) :
            score += 20;
            break;
        case (40<niveau<50) :
            score+= 30;
            break;
        case (niveau>=50) :
            score+= 50;
            break;
    }
}

//tous les -100 pts, le joueur perd une vie et remonte de 100 pts
function badLoseLife() {
    if (score<=-100) {
        score += 100;
        //scoreColor(score);
        vies--;
    }
}

//modificaion du background en fonction des niveaux
function levelBackground(niveau) {
    switch (true) {
        case (niveau<=5):
            document.getElementById('myCanvas').style.backgroundImage= "url('./assets/images/background/BlueMountainsresize.jpg')";
            break;
        case (niveau<=10):
            document.getElementById('myCanvas').style.backgroundImage= "url('./assets/images/background/FirewatchForestDawnrogn.jpg')";
            break;
        case (niveau<=15):
            document.getElementById('myCanvas').style.backgroundImage= "url('./assets/images/background/FirewatchForestSunsetrogn.jpg')";
            break;
        case (niveau<=20):
            document.getElementById('myCanvas').style.backgroundImage= "url('./assets/images/background/FirewatchForestPurpleNightrogn.png')";
            break;
        case (niveau<=30):
            document.getElementById('myCanvas').style.backgroundImage= "url('./assets/images/background/FirewatchForestStarrogn.jpg')";
            break;
        case (niveau<=45):
            document.getElementById('myCanvas').style.backgroundImage= "url('./assets/images/background/FirewatchForestNightrogn.jpg')";
            break;
        case (niveau<=50):
            document.getElementById('myCanvas').style.backgroundImage= "url('./assets/images/background/FirewatchForestDawnrogn.jpg')";
            break;
        case (niveau>50):
            document.getElementById('myCanvas').style.backgroundImage= "url('./assets/images/background/FirewatchForestRedresize.jpg')";
            break;
    }
}

//modification de la musique en fonction des niveaux
function levelMusic() {
    switch (true) {
        case (niveau<=5):
            if (buttnMusic===1) {assets.musicStart.play()}
            titleMusic="musicStart";
            break;
        /*
        case (niveau<=10):
            if (buttnMusic===1) {assets.musicDawnNewWord.play()}
            titleMusic="musicDawnNewWord";
            break;*/
        case (niveau<=15):
            if (buttnMusic===1) {assets.musicDawnNewWord.play()}
            titleMusic="musicDawnNewWord";
            break;
        case (niveau<=20):
            if (buttnMusic===1) {assets.musicPurpleNight.play()}
            titleMusic="musicPurpleNight";
            break;
        /*
        case (niveau<=30):
            if (buttnMusic===1) {assets.musicStarryNight.play()}
            titleMusic="musicStarryNight";
            break;
        case (niveau<=45):
            if (buttnMusic===1) {assets.musicStarryNight.play()}
            titleMusic="musicStarryNight";
            break;*/
        case (niveau<=50):
            if (buttnMusic===1) {assets.musicStarryNight.play()}
            titleMusic="musicStarryNight";
            break;
        case (niveau>50):
            if (buttnMusic===1) {assets.musicLastLevel.play()}
            titleMusic="musicLastLevel";
            break;
    }
}
function levelMusicStop() {
    //remplacement de la fonction stop() par pause() pour que la reprise
    //de la music dans un niveau suivant soit plus agréable et moins genante 
    switch (true) {
        case (niveau<=5):
            assets.musicStart.pause();
            break;
        /*
        case (niveau<=10):
            assets.musicDawnNewWord.pause();
            break;*/
        case (niveau<=15):
            assets.musicDawnNewWord.pause();
            break;
        case (niveau<=20):
            assets.musicPurpleNight.pause();
            break;
        /*
        case (niveau<=30):
            assets.musicStarryNight.pause();
            break;
        case (niveau<=45):
            assets.musicStarryNight.pause();
            break;*/
        case (niveau<=50):
            assets.musicStarryNight.pause();
            break;
        case (niveau>50):
            assets.musicLastLevel.pause();
            break;
    }
}