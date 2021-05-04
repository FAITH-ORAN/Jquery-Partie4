var button1="<button id='btn1'>Pierre</button>";
var button2="<button id='btn2'>Feuille</button>";
var button3="<button id='btn3'>Ciseaux</button>";
var div="<div id='div1'></div>";

$(document).ready(function(){
    $("body").prepend(button1,button2,button3,div);
     btn=new Array(button1,button2,button3);
    for (let i = 0; i < btn.length; i++) {//j'ai créé une loop je l'ai initialisé i=index 0 et le i sera inférrieur au choix des boutton et j'ai incrémenter pour sortir de la loop
        $("button").click(function(){//j'ai ajouté un boutton evenement clique et j'ai nommé ma fonction
        //j'ai crée ma fonction
          var gamer1 = $("button").html();//j'ai déclaré des variables locales le innerHtml accede au contenu
          var gamer2 = [$("button").Math.floor(Math.random() * btn.length)].html();//math random il génére alétoirement des nombres
          let result = "";
       
          if (gamer1===gamer2) {
            result = "Egalité";
          }
          else if ((gamer1=== "Pierre" && gamer2 === "Ciseaux") || (gamer1 === "Ciseaux" && gamer2 === "Feuille") || (gamer1 === "Feuille") && (gamer2 === "Pierre")) {
            result = " joueur 1 a gagné";
          }
          else {
            result = "joueur 2 a gagné";
          }
       $("#box").html() = `
        Joueur1 : ${gamer1}</br>
        Joueur2 : ${gamer2} <br/>
        Résultat : ${result}
      `  ;
      
          
        });
        
        
      }
})
