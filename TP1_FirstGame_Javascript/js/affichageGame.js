// -- AFFICHAGE --///
function afficheInfoJeu(colorPause) {
    ctx.save();
    
    //- NIVEAU -//
        //Texte
    ctx.fillStyle="orange";
    ctx.font="21pt LionKing";
    ctx.textAlign = "right";
    ctx.fillText("Niveau :"+niveau, canvas.width-5, 30); 
        //Contour du texte
    ctx.lineWidth=0.5;
    ctx.strokeStyle="red";
    ctx.textAlign = "right";
    ctx.strokeText("Niveau :"+ niveau, canvas.width-5, 30);

    //- Text EtatJeu -//
    ctx.fillStyle="#000080"; //navy
    ctx.font="13pt Gabriola";
    ctx.textAlign = "left";
    ctx.fillText(etatJeu, 5, 22);    

    //-- Score --//
    ctx.fillStyle="#FF4500"; 
    ctx.font ="15pt LionKing";
    ctx.textAlign = "right";
    ctx.textBaseline = "center";
    ctx.fillText("Score: "+score, canvas.width-30, canvas.height/8 +10);

    //-- Vies --// 
    ctx.font ="15pt LionKing";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("Vies: "+vies, canvas.width-30, canvas.height/8 +15);

    //-- Affichage PAUSE --//
    ctx.fillStyle= colorPause || "transparent"; //#FF866A
    ctx.font = " bold 25pt Gabriola";
    ctx.textAlign = "left";
    ctx.fillText("Press 'R' to Restart", canvas.width/8 +30, canvas.height -70);

    ctx.restore();
}
function afficheMenuPrincipal() {
    ctx.save();
    ctx.translate(0, 100);

    //Title (START)
    ctx.fillStyle = "#01796F";  //vert pin
    ctx.font ="30pt LionKing";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("Start Game", canvas.width/2, canvas.height/8);
    
    //Susbtitle (START)
    ctx.font ="15pt Lobster";
    ctx.textAlign = "center";
    ctx.fillText("(Click or Spacebar to Start )", canvas.width/2, canvas.height/8 +35);

    ctx.restore();
}
function afficheEcranChangementNiveau() {
    ctx.save();
    ctx.translate(0, 100);

    //Title (NEXT LEVEL)
    ctx.fillStyle= "#01796F";
    ctx.font = "30pt Lobster";  //Calibri
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("Bravo ! Niveau "+niveau+" terminé !", canvas.width/2, canvas.height/14);

    //Score (NEXT LEVEL)
    ctx.font ="20pt Lobster";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("Score: "+score, canvas.width/2, canvas.height/8 +35);

    //Vies (NEXT LEVEL)
    ctx.font ="20pt Lobster";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("Vies: "+vies, canvas.width/2, canvas.height/8 +40);

    //Substitle (NEXT LEVEL)
    ctx.font ="20pt Lobster";
    ctx.textAlign = "center";
    ctx.fillText("(Click or Spacebar to Next Level)", canvas.width/2, canvas.height/4 +35);
    ctx.restore();
}
function afficheEcranGameOver() {
    ctx.save();
    ctx.translate(0, 100);

    //Title (GAMEOVER)
    ctx.fillStyle= "#01796F";   //green
    ctx.font = "30pt LionKing";
    ctx.textAlign = "center";
    ctx.fillText("Game Over ! Try Again !", canvas.width/2, canvas.height/14);

    //Score (GAME OVER)
    ctx.font ="20pt Lobster";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("Score: "+score, canvas.width/2, canvas.height/8 +35);

    //Vies (GAME OVER)
    ctx.font ="20pt Lobster";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("Vies: 0", canvas.width/2, canvas.height/8 +40);

    //Substitle (GAMEOVER)
    ctx.font ="20pt Lobster";
    ctx.textAlign = "center";
    ctx.fillText("(Click or spacebar to reStart)", canvas.width/2, canvas.height/4 +35);
    ctx.restore();
}
function afficheEcranPause() {
    /*
    ctx.save();

    ctx.fillStyle= "green";
    ctx.font = "30pt Calibri";
    //ctx.textAlign = "center";
    ctx.fillText("R = Restart", 100, canvas.height -100);

    ctx.restore();
    */
}
function afficheEcranRestart() {
    ctx.save();
    ctx.translate(0, 100);

    //Title (START)
    ctx.fillStyle = "#01796F";
    ctx.font ="30pt LionKing";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("Restart Game", canvas.width/2, canvas.height/8);
    
    //Susbtitle (START)
    ctx.font ="15pt Lobster";
    ctx.textAlign = "center";
    ctx.fillText("(Click or Spacebar to ReStart)", canvas.width/2, canvas.height/8 +35);

    ctx.restore();
}