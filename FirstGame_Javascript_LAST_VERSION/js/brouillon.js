/* ATTENTION SERT UNIQUEMENT DE BROUILLON !!!*/
/* -- n'est pas "connecté" à la page index.html -- */

function traitecollisionBalleAvecMonstre(b) {
    if (circRectsOverlap(monstre.x, monstre.y, monstre.larg, monstre.hautr, b.x, b.y, b.rayon)) {
        
        //Collision BalleChercheuse
        if (b instanceof BalleChercheuse) {
            monstre.vitesseX = - monstre.vitesseX*1.5;
            monstre.vitesseY = - monstre.vitesseY*1.5;
            /*useless
            b.vitesseX = - b.vitesseX*1.5;
            b.vitesseY = - b.vitesseY*1.5;*/
            console.log("Collission avec BalleChercheuse");

            
            /* BROUILLON TENTATIVE DE COLLISION AVEC TIMER N°1 */
            /*
            let max = 3000; //3000ms
            let s = 0;
            
            if (circRectsOverlap(monstre.x, monstre.y, monstre.larg, monstre.hautr, b.x, b.y, b.rayon) && s!=3000) {
                let timer = setInterval( () => {   
                    console.log(s);
                    if (s===max) {clearInterval(timer)}
                    if (s===0 & s===600) {   //premier contact inferieur < ou = à 0.6s 
                        score-=10;
                        scoreColor(score);
                        if (score <=0) {
                            vies=-0.5;
                            vieColor(vies);
                        }
                    } else if (s%600===0 && s<3000) { //toutes les 0.6s à part s=3s; //600ms
                        score-=50;
                        scoreColor(score);
                        if (score <=0) {
                            vies=-0.5;
                            vieColor(vies);
                        }
                    }
                    s+=10;
                }, 10); //toutes les 100ms, sec+=0.1;
            }
            else {
                clearInterval(timer);
                console.log("GAME OVER");
                vies =0;
                s=0;
                vieColor(vies);
            }
            */

            /* BROUILLON TENTATIVE DE COLLISION AVEC TIMER N°1 (pb = ensemble de boucle infinis et asynchrone) */
            /*
            let max = 3000; //3000ms
            let s = 0;
            let timer;
            
            while ( s!=3000) {    //circRectsOverlap(monstre.x, monstre.y, monstre.larg, monstre.hautr, b.x, b.y, b.rayon) &&
                console.log("collision en cours "+s);
                
                timer = setInterval(function() {
                    s+=100;
                    console.log(s);

                    if (circRectsOverlap(monstre.x, monstre.y, monstre.larg, monstre.hautr, b.x, b.y, b.rayon) && s!=3000) {
                        if (s<=600) {   //premier contact inferieur < ou = à 0.6s 
                            score-=50;
                            scoreColor(score);
                            if (score <=0) {
                                vies=-0.5;
                                vieColor(vies);
                            }
                        } else if (s%600===0 && s<3000) { //toutes les 0.6s à part s=3s; //600ms
                            score-=50;
                            scoreColor(score);
                            if (score <=0) {
                                vies=-0.5;
                                vieColor(vies);
                            }
                        }
                    } else {
                        clearInterval(timer);
                    }

                }, 100); //toutes les 100ms, sec+=0.1;
                
                
                //s=3;
                //s += 100; //fonctionne avec s+=1; mais pas avec 0.1 ???? PQ ???
            }
            console.log("fin de collision" +circRectsOverlap(monstre.x, monstre.y, monstre.larg, monstre.hautr, b.x, b.y, b.rayon) );
            clearInterval(timer);       //s arrete de s'incrementer et devient s=temps de collision
            if (s===max) {
                console.log("GAME OVER");
                vies =0;
                vieColor(vies);
            }
            */
            
        }

        //on cherche l'index de la balle dans le tableau des balles
        let index =tableauDesBalles.indexOf(b);

        if (b.couleur == "red") {
            monstre.vitesseX = - monstre.vitesseX*1.2;
            monstre.vitesseY = - monstre.vitesseY*1.2;
            score -=1;
            scoreColor(score);
        }

        if (b.couleur == "green" ) {
            score +=10;
            scoreColor(score);

            //pour supprimer un élément: on utilise la méthode splice(index, nbElementsASupprimer) 
            //sur le tableau
            tableauDesBalles.splice(index, 1);
            nbBouleAManger--;
        }
    }
}

/* ------------------------- */

function changeBackground(bElement, bUrl) {
    return (bElement.style.backgroundImage = "url("+bUrl+")");
}



