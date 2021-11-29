function clique(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}
function redirecionar(){
    window.open("https://web.dio.me/course/programacao-para-internet-com-javascript/learning/33e81edf-6f9b-4b97-b3c6-12d930cf0831?back=/track/javascript-game-developer");
}
function trocar(element){
   element.innerHTML="Obrigado por passar o mouse";
}
function voltar(element){
    element.innerHTML="Passe o mouse aqui";
 }
 function load(){
     alert("Página carregada.");
 }
function change(element){
console.log(element.value);
}





/*var idade = 18;

function validaIdade(idade){
    if (idade >=18){
        console.log("Maior de idade");
    } else{
        console.log("Menor de idade");
    }
}

validaIdade(idade);
*/


/*
function soma(n1, n2){
    return n1 + n2;
}*/





/*
function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
}
alert(setReplace("Vai Japão","Japão", "Brasil"));
*/
/*
var count = 0;
for(count = 0; count <= 5; count++){
    alert(count);
}*/




/*
var count = 0;
while (count <=5){
console.log(count);
count++;
}*/





/*
var idade =prompt("Qual sua idade?");
if (idade >=18){
    alert("Maior de idade");
} else{
    alert("Menor de idade");
}*/





/*
var lista=["Banana","Maçã","Uva"];
var frutas =[{nome: "maçã", cor: "vermelha"}, {nome: "banana", cor: "amarela"}];
var fruta =["maçã", "banana", "uva"];
console.log(lista);
lista.push("Pêra");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("--"));
console.log(fruta);
console.log(frutas[1].nome + ", " + frutas[0].cor);
*/