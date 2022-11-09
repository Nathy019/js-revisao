/*Viariaveis*/
var nome = "Nathy"
let sobrenome = "Molina" //vamos utilizar desta forma
nomedomeio = "da silva"
let n1 = 1
let n2 = 9.5
let comida = "maçã"
let fumante = false
console.log(n1, n2, comida, fumante);
/*tipo de dados*/
console.log(typeof n1);// 2 é o number
console.log(typeof n2);// 9.5 é o number
console.log(typeof comida);// maçã é string
console.log(typeof fumante);// falso é boolean

let veiculos = ['carro,moto, avião'] //array 
console.log(typeof veiculos); //todo array é do tipo object em js
let salvar = function() { }
console.log(typeof salvar) // salvar é tipo function

/*Estrutura de decisão*/
/*if  (condição){valor se a condição for verdadeiro}  
else{valor se a condição for falso}*/
let nota = 8
if (nota >= 5) { // if mais visto com else
    console.log("Passou")
}
else { console.log("Reprovou") }

if (nota >= 5) { console.log("Parabéns,está aprovado") } //if sem esle

if (nota >= 7) {
    console.log("Aprovado")//if com + condições
    console.log("Aprovado")
} else if (nota >= 5) {
    console.log("Recuperação")
}
else { console.log("Reprovado") }

let dia = 5
switch (dia){
    case 1:
        console.log ("Domingo")
        break
    case 2:
        console.log ("Segunda")
        break
    case 3:
        console.log ("Terça")
        break
    case 4:
        console.log ("Quarta")
        break
    case 5:
        console.log ("Quinta")
        break
    case 6:
        console.log ("Sexta")
        break
    case 7:
        console.log ("Sabado")
        break
    default:
        console.log ("Dia inválido")

}
/*Estrutura de repetição*/
let contador = 1
while(contador <= 10){
    console.log (contador)
   contador ++// contador = contador + 1
}
for(let contador2=10; contador <=20; contador++)
{console.log("contador2")}

/* while (condição){codigo de laço de repetição}
for (inicialização; condição; incremento){
    código de laço de repetição
} */


