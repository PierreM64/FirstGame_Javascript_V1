
function traiteCollisionsBordMONSTRE() {
    //TRAITEMENT DE LA COLLISION SUR L'AXE X
    if(monstre.x > canvas.width - monstre.larg) {
        console.log("Collision à DROITE");
        //Truc à savoir pour ne pas que l'objet donne l'impression
        //d'aller plus loin que le bord de l'ecran : 
        //on le remet au point de contact 
       monstre.x = canvas.width - monstre.larg;
       //on inverse la vitesse
       monstre.vitesseX=-monstre.vitesseX;
    }
    else if (monstre.x <0) {
        console.log("Collision à GAUCHE");
        monstre.vitesseX=-monstre.vitesseX;
    }

    //TRAITEMENT DE LA COLLISION SUR L'AXE Y
    if (monstre.y<0) {
        console.log("Collision en HAUT");
        monstre.y = 0;
        monstre.vitesseY = - monstre.vitesseY;
    } else if (monstre.y + monstre.hautr > canvas.height) {
        console.log("Collision en BAS");
        monstre.y = canvas.height - monstre.hautr;
        monstre.vitesseY = - monstre.vitesseY;
    }
}

function traitecollisionBalleAvecMonstre(b) {
    if (circRectsOverlap(monstre.x, monstre.y, monstre.larg, monstre.hautr, b.x, b.y, b.rayon)) {
        
        //Collision BalleChercheuse
        if (b instanceof BalleChercheuse) {
            monstre.vitesseX = - monstre.vitesseX*1.5;
            monstre.vitesseY = - monstre.vitesseY*1.5;
            monstre.x -= monstre.larg;
            monstre.y -= monstre.hautr;
            
            console.log("Collission avec BalleChercheuse");
            
            //la balle chercheuse revient à sa position d'origine en cas de contact
            b.x = canvas.width -50;
            b.y = canvas.height-40;
                /*
                //&change de couleur
                b.couleur="yellow";
                let timer = setInterval( () => {
                    b.couleur="purple";
                }, 10);
                clearInterval(timer);
                */

            score-=40;
            scoreColor(score);
            //A partir du niveau 15, la bouleChercheuse peut etre en contact une première fois
            //sans enlever de vie 
            if (niveau < 15 || firstContact>=1) {
                vies--;
                vieColor(vies);
            }
            firstContact++;
        }

        //on cherche l'index de la balle dans le tableau des balles
        let index =tableauDesBalles.indexOf(b);

        //ne fonctionne pas si une boule rouge est en contact durant l'action PAUSE
        //SINON le score baisse alors que le jeu est en pause
        if (b.couleur == "#C72C48" && buttnPlay==1 ) { //ennemi
            monstre.vitesseX = - monstre.vitesseX*1.2;
            monstre.vitesseY = - monstre.vitesseY*1.2;
            score -=1;
            scoreColor(score);
        }

        if (b.couleur == "seagreen" ) { //si bouleAManger
            score +=10;
            scoreColor(score);

            //pour supprimer un élément: on utilise la méthode splice(index, nbElementsASupprimer) 
            //sur le tableau
            tableauDesBalles.splice(index, 1);
            nbBouleAManger--;
        }
    }
}

//Affichage du score & couleur en fonction de celui-ci
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
        case (7>vies>=5) :
            spanVie.innerHTML= "<b style='color:green'>"+ vies + "</b>";
            break;
        case (vies<=2) :
            spanVie.innerHTML= "<b style='color:red'>"+ vies + "</b>";
            break;
        case (10>vies>=7) :
            spanVie.innerHTML= "<b style='color:blue'>"+ vies + "</b>";
            break;
        case (vies>=10) : 
            spanVie.innerHTML= "<b style='color:purple'>"+ vies + "</b>";
            break;
        case (2<vies<5) :
            spanVie.innerHTML= "<b style='color:orange'>"+ vies + "</b>";
    }
    
}

function finCollisBalleChercheuse(b) {
    return (circRectsOverlap(monstre.x, monstre.y, monstre.larg, monstre.hautr, b.x, b.y, b.rayon) === false);
}








/* -------- */
// Fonctions génériques de collision cercle-cercle, rectangle-rectangle et cercle-rectangle
// pour les curieux, polygone-polygone convexes existe aussi voir algorithme SAT
// (Separation Axis Theorem)
// Collisions between rectangle and circle
// Collisions between aligned rectangles
function circleCollide(x1, y1, r1, x2, y2, r2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return dx * dx + dy * dy < (r1 + r2) * (r1 + r2);
}

function rectsOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
    if ((x1 > (x2 + w2)) || ((x1 + w1) < x2))
       return false; // No horizontal axis projection overlap
    if ((y1 > (y2 + h2)) || ((y1 + h1) < y2))
       return false; // No vertical axis projection overlap
    return true; // If previous tests failed, then both axis projections
                 // overlap and the rectangles intersect
}
  
function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
     var testX=cx;
     var testY=cy;
     if (testX < x0) testX=x0;
     if (testX > (x0+w0)) testX=(x0+w0);
     if (testY < y0) testY=y0;
     if (testY > (y0+h0)) testY=(y0+h0);
     return (((cx-testX)*(cx-testX)+(cy-testY)*(cy-testY))< r*r);
}