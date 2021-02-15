// Exemple : appelle changeDeNiveau() toutes les 4s.
/*let id = setInterval(changeNiveau, 4000); */

//- STOPWATCH / CHRONOMETRE avec m= valeur maximum d'arrêt -//
function stopwatch(m){ //temps en seconde
    let max = m;
    let sec = 0;
  
    let timer = setInterval(() => {
        //document.querySelector('#tempsRestant').innerHTML='00:'+sec;
      
        if(sec === 10) {
          //console.log("on est à 10s")
        } else if(sec === 15) {
          // un nouvel ennemi arrive
          //console.log("On est à 15s")
        }
        if(sec % 2 === 0) {
          // toutes les 2s on fera qq chose
          //console.log("Multiple de 2")
        }
        if (sec === max) {
            console.log("Stopwatch Fini");
            clearInterval(timer);
        }
        sec++;
    }, 1000); //1000 =1s = 1000 ms
}

//- MINUTEUR -//
function minuteur(tempsRestant){ //temps en seconde
    let sec = tempsRestant;
  
    let timer = setInterval(() => {
        //on affiche le temps dans HTML
        //document.querySelector('#tempsRestant').innerHTML='00:'+sec;
      
        /*
        //on effectue une acction au bout de 10s
        if(sec === 10) {
          console.log("on est à 10s")
        } else if(sec === 15) { 
          //idem 15s
          console.log("On est à 15s")
        }
        if(sec % 2 === 0) {
        // toutes les 2s on fera qq chose
          console.log("Multiple de 2")
        }*/
        if (sec === 0) {
            console.log("Timer Fini");
            clearInterval(timer);
        }

        sec--;
    }, 1000); //1000 =1s = 1000 ms
}

//-- TIMER COLLISION --//
/*
function timerCollision(b){ //temps en seconde
    let max = 3;
    let sec = 0;
  
    let nb=0;
    let timer = setInterval(() => {
        //on affiche le temps dans HTML
        //document.querySelector('#tempsRestant').innerHTML='00:'+sec;

        if (score>0) {
            //Premiere collision
            if (nb===0) {
                score-=50;
                console.log("Premier contact !");
                scoreColor(score);
            }
            //toutes les 600ms en cas de contact supplémentaires
            if (nb>0 && (sec % 0.6 === 0)) {
                console.log("on est a 0.6s");
                score-=50;
                scoreColor(score);
            }
            if (finCollisBalleChercheuse(b)) { clearInterval(timer)};
        }
        else {
            
            //Premiere collision avec points négatifs
            *//*
            if (nb===0 && sec<) {
                if (finCollisBalleChercheuse(b)) { 
                    clearInterval(timer);
                    console.log(nb);
                }
                console.log("Premiere Collison (-0.5 Life !!!)"); 
                score =0; //score reste a 0 et si negatif revient à zero car perte de vie
                vies-=0.5;
                scoreColor(score);
                vieColor(vies);
            }*//*
            if (sec === max) { 
                score =0;
                scoreColor(score);
                vies=0;
                vieColor(vies);
                console.log("GAME OVER");
                console.log("Timer Fini");
                clearInterval(timer);
                //GAME OVER
            } else {
                if (finCollisBalleChercheuse(b)) { 
                    clearInterval(timer)
                    score =0; //score reste a 0 et si negatif revient à zero car perte de vie
                    vies-=0.5;
                    scoreColor(score);
                    vieColor(vies);
                }
            }

            *//*
            if (sec % 1.2 === 0) {
                if (finCollisBalleChercheuse(b)) { clearInterval(timer)};
                console.log("on est a 1.2s");
                console.log(nb);
                score =0; //score reste a 0 et si negatif revient à zero car perte de vie
                vies-=0.5;
                scoreColor(score);
                vieColor(vies);
            }*//*
            
        }
        sec+=0.1;
        this.nb++;
    }, 100); //toutes les 600 ms
}*/