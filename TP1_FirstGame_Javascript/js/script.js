window.onload = init;
//ci dessus permet lire toutes les balises HTML et ect
//avant de commencer à lire le javascript
//SINON fait lit ligne par ligne et le code javascript ne fonctionne pas correctement

//-- Declaration des variables globales--//
    //-- variables avec valeurs fixes --/
    let vieMax=6;
    let nbBallSupp=3;

let canvas;
let ctx;
let score=0;
let niveau=1;
let vies=vieMax;
let spanNiveau;
let spanScore;
let spanVie;
let spanLoading;
let etatJeu = "MenuPrincipal";
let balleChercheuse;
let assets;
let nbBouleAManger;
let firstContact=0;
let grd; //gradient
let colorPause="transparent";  //=#FF4500;


//ici on va stocker les objets graphiques du jeu pour l'instant des balles
let tableauDesBalles = [];

//-- Initialisation & Chargemnt des ressources --//
function init() {
    loadAssets(startGame);

    spanLoading = document.querySelector("#loadingPage");
    spanLoading.innerHTML= "<b style='color:green'> Game Ready !</b>";
    console.log("Page et ressources pretes à l'emploi");
    // appele quand la page et ses ressources sont ready
    // On dit aussi que le DOM est ready (en fait un peu plus...)
}

//-- PROGRAMME PRINCIPAL --//
function startGame(assetsLoaded) {
    assets = assetsLoaded;
    console.log(
        "Page chargée ! DOM ready!" 
        + " Toutes les ressources de la page sont utilisable :"
        + " videos, images, polices, etc ...");
    //ci dessus permet de vérifier la lecture de toutes les balises HTLM  et ect
    //Dc, la bonne lecture du javascript en fonction du code HTLM

   //on recuperer grace à la "selector API" un pointeur sur le canvas
   canvas = document.querySelector("#myCanvas");
   spanNiveau = document.querySelector("#niveau");
   spanScore = document.querySelector("#score");
   spanVie = document.querySelector("#vie");

   canvas.height = window.innerHeight*0.7;
   canvas.width = window.innerWidth*0.95;

   //on ajoute des ecouteurs souris/clavier sur le canvas
   canvas.onmousedown =traiteMouseDown;
   canvas.onmouseup =traiteMouseUp;
   canvas.onmousemove =traiteMouseMove;

   //canvas.addEventListener("mousedown", traiteMouseDown); //-> identiq qu'au dessus mais plus compliqué pour moins d'utilité

        //le canvas peut detecter les touches que s'il y a le focus (voir MOOC)
        //c'est plus simple de mettre l'ecouteur sur le document (la page)
   document.onkeydown = traiteKeyDown;
   document.onkeyup = traiteKeyUp;

   //Pour dessiner, on a besoin de son "contexte graphique":
   //un objet qui va permettre de dessiner, ou de changer les propriétés du cavas 
   //(largeur du trait, couleur, repere, etc ... ) 
   ctx = canvas.getContext("2d");

   //gradient pour la balleChercheuse givrée en mode pause
   
   grd = ctx.createLinearGradient(0,0,canvas.width, canvas.height/2);
   grd.addColorStop(0, "rgba(196, 219, 240, 1)");
   grd.addColorStop(0.33, "rgba(85, 159, 228, 1)");
   grd.addColorStop(0.66, "rgba(196, 219, 240, 1)");
   grd.addColorStop(1, "rgba(85, 159, 228, 1)");

   //Affichage dans la console du message de la methode donneTonNom
   console.log(monstre.donneTonNom());

   creerDesBalles(niveau+nbBallSupp); //10

   //balleChercheuse = new BalleChercheuse(100, 100, 40, "red", 0, 0);

   requestAnimationFrame(animationLoop);
   setInterval(changePositionYeux, 300); // appelle la fonction changeCouleur toutes les n millisecondes
}

//animation a 60 images/s
function animationLoop() {
    //1 on effface le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //2.1 on dessine les objets
    afficheInfoJeu(colorPause);

    switch (etatJeu) {
        case "MenuPrincipal":
            afficheMenuPrincipal();
            break;
        case "JeuEnCours":
            updateJeu();
            break;
        case "ChangementNiveau":
            scoreColor(score);
            afficheEcranChangementNiveau();
            break;
        case "Pause" :
            //afficheEcranPause();
            break;
        case "Play":
            break;
        case "GameOver":
            tableauDesBalles =[];
            niveau = 1;
            creerDesBalles(niveau+nbBallSupp)
            afficheEcranGameOver();
            break;
        case "Restart" :
            afficheEcranRestart();
            break;
    }
    
    //5 on demande au navigateur de rappeller la fct 
    //animationLoop dans 1/60eme de seconde
    requestAnimationFrame(animationLoop);
    //on fait une recurrence de la fonction qui s'appelle elle mm
}
function updateJeu() {

    //2.2 on dessine les objets
    monstre.draw(ctx);
    updateBalles(); //dessin, collision & deplacement des balles

    

    //3 on deplace les objets
    monstre.move();

    //4 on peut faire autre chose (par : exemple detecter des collisions)
    //ou prendre en compte clavier, la souris, manette de jeu, ...
    //requestAnimationFrame(traiteCollisionsBordMONSTRE);
    traiteCollisionsBordMONSTRE();
    
    //LA BALLE CHERCHEURSE CHERCHE LA POSITION DU MONSTRE
    //MAIS UNIQUEMENT SI ON EST EN MODE PLAY (buttnPlay=1)
    if (buttnPlay===1) { 
        balleChercheuse.setTarget(monstre.x+monstre.larg/2, monstre.y+monstre.hautr/2);
    } else { //PAUSE
        balleChercheuse.setTarget(balleChercheuse.x, balleChercheuse.y);
    }
  
    if (niveauFini()) {
        scoreNiveau(niveau);
        etatJeu = "ChangementNiveau";
    }
}
function updateBalles() {
    //utilisation d'un iterateur sur le tableau
    tableauDesBalles.forEach ((b) => {
        b.draw(ctx);
        traiteCollisionsBordBALLES(b);
        traitecollisionBalleAvecMonstre(b);
        //avant de commencer à refaire bouger les boules, on vérifie :
        if (vies <=0) { etatJeu ="GameOver"}
        b.move();
    });
}

function niveauSuivant() {
    //console.log("NIVEAU SUIVANT");
    niveau++;

    //permet de changer le fond d'ecran en fct des niveaux
    //levelBackground(niveau);

    //Tous les 5 niveaux une vie supplémentaire est donnée au joueur
    if (niveau%5===0 && niveau!=0) { vies++; }
    vieColor(vies);

    //utile pour update le score en cas de Restart
    scoreColor(score);

    spanNiveau.innerHTML= "<b>"+niveau+"</b>"
    monstre.x=0;
    monstre.y= monstre.hautr;
    firstContact=0;
    
    tableauDesBalles.splice(0, tableauDesBalles.length);
    
    creerDesBalles(niveau + nbBallSupp);

    etatJeu = "JeuEnCours";
}
//si longueur du tableauDesBalles est nul, niveauFini = true;
function niveauFini() {
    //console.log("reste "+ nbBouleAManger+" nbBouleAManger");
    return nbBouleAManger === 0; //tableauDesBalles.length === 3
}



