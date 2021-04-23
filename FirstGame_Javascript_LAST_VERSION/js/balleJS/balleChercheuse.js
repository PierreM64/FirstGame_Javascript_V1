class BalleChercheuse extends BalleVitssAngle {
    target ={};
    //angle=0;

    constructor(x,y, rayon, couleur) {
        //constructeur de la classe mère
        super(x, y, rayon, couleur, 1, 0); //vitesse =1; angle =0
    }

    setTarget(x,y) {
        this.target.x = x;
        this.target.y = y;
    }

    distanceToTarget() {    //Pythagore
        let dx =this.target.x - this.x;
        let dy =this.target.y - this.y;
        return Math.sqrt(dx*dx +dy*dy);
    }

    move() {
        //si aucune cible n'est definit, on ne fait rien
        if (this.target.x === undefined) return;

        //- on se dirige vers la cible -//
        // #1 : On calcule l'angle entre la position courante de la balle et la cible
        let dx = this.target.x - this.x;
        let dy = this.target.y - this.y;
        
        this.angle = Math.atan2(dy,dx);

        if (this.distanceToTarget() <3 ) return;

        super.move();
    }
}