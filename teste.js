//EDUARDO KLEN - 08/04/2026
// 3 tds

//1 1. exiba a mensagem "ola mundo" no console.
 
console.log("ola mundo");

//2 crie uma variavel com seu nome e exiba o valor no console.


let nome = "Eduardo Klen Soares";
console.log(nome);

//3.some dois numeros e exiba o resultados

let numero = 1+1;
console.log(numero);


//4.subtrai dois numeros e exiba o valor
let a = 1-1;
console.log(a);


//5. descubra o resto da divisão de um numero por outro

let b = 5%5;
console.log(b);

//6. crie uma variavel booleana(true e false) e exiba o valor
let c = true;
let d = false;
console.log(c,d);

//7. verifique se um numero é maior que outro


let verificacao= 1> 2;
console.log(verificacao);

//8.crie duas variaveis com algum valor e exiba a contetanação

let oaoa = 1010;
let adas = 2020;
console.log(`teste ${oaoa} ${adas}`);

//9.descubra o tipo de uma variavel

let tipovariavel = 1;
console.log(typeof tipovariavel);

//10.converta numero para string.
let convertao = 10
console.log(typeof String(convertao))

//11. string para numero
let text = "123";
console.log(typeof Number(text));

//12.laços de repeticao, exiba no console numero de 0 10;

for(let i =0; i<=10; i++){
console.log(i);
}

//13. exiba apenas numero pares até 20.

for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}

//14. mostre no console de 10 até 1;



for (let i = 10; i>0; i--) {
    console.log(i);
}

//15.some numeros de 1 a 5
soma = 0;
for (let i = 1; i <= 5; i++) {
    soma+=i;
    console.log("valor de 1 " +i+ " valor soma")
}
console.log(soma)

//16. faça a tabuada do 3;

for (let i = 0; i <= 30; i++){
console.log("3x" +i+ "="+3*i);
}

"or"
for (let i = 0; i <= 30; i += 3) {
    console.log(i);
}