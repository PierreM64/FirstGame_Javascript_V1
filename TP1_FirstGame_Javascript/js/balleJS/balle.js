//Exemple de classe
class Balle {
    x; 
    y;
    couleur="pink";
    rayon;

    constructor(x, y , rayon, couleur) {
        this.x=x;
        this.y=y;
        this.rayon= rayon;
        this.couleur = couleur;
        //if (vitesseX) this.vitesseX = vitesseX;
        //if (vitesseX) this.vitesseY = vitesseY;
    }

    draw(ctx) {
        ctx.save();

        ctx.translate(this.x, this.y);

        //dessine un cercle, on utilise le mode "chemin"/"path"
        ctx.beginPath(); 

        //cx, cy, rayon, angle depart, anlge arrivée en radians
        ctx.arc(0, 0, this.rayon, 0, 2*Math.PI );
        
        //on donne l'ordre d'afficher le chemin
        ctx.fillStyle=this.couleur;
        ctx.fill(); //en formes pleines

        //bordure
        ctx.lineWidth= 3;
        ctx.strokeStyle ="pink";
        ctx.stroke(); //en fil de fer

        ctx.restore();
    }

    move() {
        //this.x += this.vitesseX;
        //this.y += this.vitesseY;
    }
}

//-- FUNCTIONS --//
function creerDesBalles(nb) {
    let bouleAManger ="seagreen"; //green //vert océan
    let ennemi ="#C72C48"; //red //rouge cramoisi  //framboise
    let tabCouleurs = [ennemi.toString(), bouleAManger.toString()];
    
    nbBouleAManger =0;
    for (let i=0; i<nb; i++) {
        let r =4+Math.random() * 26; //taille minimale de 4 pour que la couleur soit visible
        let x = canvas.width - r -5; //Math.random() * canvas.width
        let y = Math.random() * canvas.height;
       
        let indexCouleur =Math.floor(Math.random() *tabCouleurs.length);

        //--- Couleur ---//
        //- AU MOINS UNE BOULE A MANGER CREER -//
            //si jamais le chiffre aléatoire est égal à 2, indexCouleur=1;
        if (indexCouleur === 2) { indexCouleur=1}; 

            //compte nombre de bouleAManger  
            //(ici bouleAManger.toString()="green" & tabCouleurs.indexOf() renvoie l'index de lelement du tableau)
        if (indexCouleur === tabCouleurs.indexOf(bouleAManger.toString())) {
            nbBouleAManger++;
        }
        
        //si pas de bouleAManger créer, on en créer une (pour en avoir au moins une)
        if (i===nb-1 && nbBouleAManger===0) {
            indexCouleur=tabCouleurs.indexOf(bouleAManger.toString());
            nbBouleAManger++;
        } 
        
        let couleur = tabCouleurs[indexCouleur];
        
        let vitesseX = -5 +Math.random() * 10; //vitesse entre -5 & 5
        let vitesseY = -5 +Math.random() * 10; //vitesse entre -5 & 5
            
        let b = new BalleVitssXY (x, y, r, couleur, vitesseX, vitesseY);
    
        //on ajoute la balle au tableau
        tableauDesBalles.push(b);
        //nbBouleAManger++;
    }
    console.log("nbBouleAManger : "+ nbBouleAManger);

    // on ajoute une balle chercheuse dans le tableau dans le coin inférieur droit
    balleChercheuse = new BalleChercheuse (canvas.width -50, canvas.height-40, 40, "darkviolet", 0, 0);
    tableauDesBalles.push(balleChercheuse);
}
    
function traiteCollisionsBordBALLES(b) {
    //TRAITEMENT DE LA COLLISION SUR L'AXE X
    if ((b.x+b.rayon) > canvas.width) {
        //console.log("Collision à DROITE");
        
        //Truc à savoir pour ne pas que l'objet donne l'impression
        //d'aller plus loin que le bord de l'ecran : 
        //on le remet au point de contact 
       b.x = canvas.width - b.rayon;
       //on inverse la vitesse
       b.vitesseX= -b.vitesseX;
    }
    else if ((b.x - b.rayon)<0) {
        //console.log("Collision à GAUCHE");
        b.vitesseX=-b.vitesseX;
    }

    //TRAITEMENT DE LA COLLISION SUR L'AXE Y
    if (b.y - b.rayon <0) {
        //console.log("Collision en HAUT");
        b.y = b.rayon;
        b.vitesseY = - b.vitesseY;
    } else if ((b.y + b.rayon) > canvas.height) {
        //console.log("Collision en BAS");
        b.y = canvas.height - b.rayon;
        b.vitesseY = - b.vitesseY;
    }
}

function updateBalles() {
    //utilisation d'un iterateur sur le tableau
    tableauDesBalles.forEach ((b) => {
        b.draw(ctx);
        traiteCollisionsBordBALLES(b);
        traitecollisionBalleAvecMonstre(b);
        if (vies <=0) { etatJeu ="GameOver"}
        b.move();
    });
}