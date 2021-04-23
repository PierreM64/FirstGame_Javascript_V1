class ObstacleImage extends Balle {
    image;

    constructor(x,y, rayon, urlImage) {
        super(x, y, rayon, "red");

        //on doit creer et charger l'image
        this.image = new Image();
        this.image.src =urlImage;

        this.image.onload =function() {
            console.log("ObstacleImage, image chargée")
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.drawImage(this.image);
        ctx.restore();
    }
}