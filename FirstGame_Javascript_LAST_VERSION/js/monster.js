//ctx.fillRect(coord x, coord y, largeur(x), hauteur(y));

let monstre = {
    x:0, //100
    y:0, //100
    larg: 50, //200
    hautr: 50, //200
    vitesseX: 0,
    vitesseY: 0,
    //pour créer une box qui integre tout le monstre pour l'empecher de sortir du canvas lors des collisions
    //debut
    /*
        boundingBox: {x:0, y:0, l:80,h:200},
        drawBoundingBox: function (ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.strokeStyle="red";
            ctx.strokeRect(0, 0, this.bodingBox.l, this.bodingBox.h);
            ctx.restore();
        },
        */
    //fin
    donneTonNom : function() { 
        return "Je m'appelle Jean Marc, je suis x= " 
                +this.x + ", y="+this.y+";" ;
    },
    draw: function(ctx) {
        ctx.save();

        //ctx.translate(this.x -400, this.y -10);
        //ctx.rotate(0.2);

        //this.drawBodingBox(ctx);

        //Tete
        //ctx.lineWidth = 5;
        ctx.fillStyle ="#24445C";  //bleu de prusse //bleu pétrole foncé:#1D4851;
        ctx.fillRect(this.x, this.y, this.larg, this.hautr); //(400, 10)

        /*
        //oeil gauche
        ctx.fillStyle ="red";
        ctx.fillRect(440, 50, 20, 20);
        //sous oeil gauche
        ctx.fillStyle= "white";
        ctx.fillRect(450, 60, 10, 10);

        //oeil droit
        ctx.fillStyle ="blue";
        ctx.fillRect(540, 50, 20, 20);
        //sous oeil droit
        ctx.fillStyle= "white";
        ctx.fillRect(550, 60, 10, 10);

        //bouche
        ctx.fillStyle= "green";
        ctx.fillRect(440, 140, 120, 20);
        */
        //ctx.drawImage(this.image, 0, 0, this.larg, this.hautr); //x=0,y=0

        //on restore le context
        ctx.restore();
    },
    move: function() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
        //this.angle += this.incAngle;
        //this.scale += this.incScale;
        //if (this.scale > 2) this.incScale = -this.incScale;
        //if (this.scale < 1) this.incScale = -this.incScale;
    },
    animeYeux: function () {
        this.xOeil = 450 + Math.random() * 5;
        this.yOeil = 60 + Math.random() * 5;
    },
    setPos: function(x,y) {
        this.x = x -this.larg/2;
        this.y = y -this.hautr/2;
    },
}

function changePositionYeux() {
    //console.log("change positionyeux");
    monstre.animeYeux();
}