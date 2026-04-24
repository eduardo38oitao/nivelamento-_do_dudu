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
let convertao = 10;
console.log(typeof String(convertao));

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
    console.log("valor de 1 " +i+ " valor soma");
}
console.log(soma);

//16. faça a tabuada do 3;

for (let i = 0; i <= 30; i++){
console.log("3x" +i+ "="+3*i);
}

"or"

for (let i = 0; i <= 30; i += 3) {
    console.log(i);
}

//17. conte quantos numero são maiores que 5
let lista = [2,6,8,1,3];
let cont = 0;


for(let i = 0; i < lista.length; i++  ){
    if(lista[i]> 5)cont++;

}

console.log(cont);


//18. percorra a string letra por letra
let palavra= "JFRS"


for(let i =0; i < palavra.length; i++ ){
    console.log(palavra[i]);
}

//19.pare um loop quando encontrar o numero 7 de 0 a 10

for(let i = 0;i<10; i++){
    if(i===7 )break;
        console.log(i);
}

//20. crie uma funtion que exibe uma mensagem.

function mensagem(){
    console.log("ola mundo");
}
mensagem();

//21. crie uma funtion que multiplaca dois numeros


function multiplaca(){
    console.log(19*2);
}
multiplaca();

//or

function multiplacar(a,b){
    return a * b; 
}
console.log(multiplacar(2,3));

//22.crie uma function que verifica se é par or impar.

function verificar(num){
    return num % 2 === 0 ? "par" : "impar";
      
}
console.log(verificar(10));

// 23. crie uma funtion que retorne o dobro.

function dobro (numero12){
    return numero12 * 2
}
console.log(dobro(2));

//24. crie uma funtion que some elementos de um array.

function somar20(z,y,x,v){
    return z + y + x + v
}
console.log(Array(somar20(1,2,3,4)))

//errada

function somaArray (arr){
    total = 0;
    for(let i =0; i<arr.length; i ++){
        total +=arr[i];
    }
    return total;
}
console.log(somaArray([2,3,1]));

//25. verifique se o numero 15 é positivo e exiba uma mensagem

if(15 >= 0 ){
    console.log("15 é positivo");
}
else{
    console.log("seu numero é negativo");
}
//or
let number = 15;
if (number >= 0){
    console.log(`${number} é positivo`);  //usando catenização
}


//26.verifique se uma pessoa é 17anos é maior e idade
let number1 = 17
if(number1 < 18){
    console.log(`${number1}de menor`)
}
else{
    console.log(`${number1}de maior`)
}

//or
console.log("\n=== Maior ou menor de idade");
let idade = 17;
if(idade>= 18){
    console.log("maior de idade");
}
else{
    console.log("menor de idade ");
}

//27. crie um array com os numero 10, 20, 30, 40 e exiba os valores


let numeros = [10,20,30,40];
console.log(numeros)

//28. crie um array com 5 frutas e exiba a primeira fruta
let arr = ["morango","kiwi","manga","abacaxi","maça"];
console.log(`a primeira fruta é ${arr[0]}`);

//29.adicione o numero 50 no final do array [10,20,30,40]
let array2 = [10,20,30,40];
array2.push(50);
console.log(array2);

//30. remove o ultimo elemento do array [1,2,3,4,5]
let array3 = [1,2,3,4,5]
array3.pop()
console.log(array3)

//31.exiba quantos elementos tem o array [5, 10 ,15 , 20]

let elemento = [5,10,15,20,1,2]
console.log(`o array tem ${elemento.length} elementos`)

//32.some todos os numeros do array [2,4,6,8]
let numeros10 = [2,4,6,8]
let somarr = 0;
for(let i = 0; i< numeros10.length; i++){
    somarr = somarr + numeros10[i];
}
console.log(` A soma dos elementos é: ${somarr}`);

//33.multiplique cada elemento do array [1,2,3,4] por 2
console.log("\n ==== multiplicar por 2 ====")
let multiplo =  [1,2,3,4];
let sum = 2 
for(let i = 0 ; i < multiplo.length; i++){
    sum = sum * multiplo[i];
}
console.log(sum);


//or

console.log("\n ==== Multiplicar por 2 ====")
let multiplo2 = [1,2,3,4];
let array1222 = []
for(let i= 0;i<multiplo2.length; i++){
    array1222.push(multiplo2[i]* 2);}
console.log(array1222);

//34. verifique se a fruta "laranja" existe no array ["maça","banana","uva"]

let frutas = ["maça","banana","uva"]
let procura = "uva";
let achou = false;
for(let i=0; i<frutas.length;i++){
    if(frutas[i] == procura){
        achou = true;
    }
}
if(achou){
    console.log(`${procura} foi encontrado`);
}else{
    console.log(`${procura} não foi encontrado`);
}

//35. exiba 1 por 1 os elementos do array ["Azul","Verde","Amarelo"]
console.log("\n Exibir elementos um por um")
let percorrer = ["Azul","Verde","Amarelo"]
for(let i = 0; i<percorrer.length; i++ ){
    console.log(percorrer[i]);
}

//36. exiba o ultimo elemento do array [100,200,300, 400, 500 ]
let numeros111 = [100,200,300, 400, 500 ];
let ultimo = numeros111 -1;
console.log(`o ultimo elemento é: ${numeros111[ultimo]}`);



///////////    MATRIZ    /////////////



//37.Crie uma matriz 2x2 com os numeros 1,2 na primeira linha e 3,4 na segunda
console.log("\n criar matriz 2x2 = ")

let matriz2x2 = [
    [1,2],
    [3,4]
]
             
console.log(matriz2x2)

//38. Exiba o elemento da linha 1 coluna 2 da matriz [[5,6],[7,8]]
let matriz = [
    [5,6],
    [7,8]
]
console.log(matriz[0][1]);

//39. exiba todos os elementos da matriz [[1,2,3],[4,5,6]]
let mat = [
    [1,2,3],
    [4,5,6]
]
console.log(mat);

//or 
let mat1 = [
    [1,2,3],
    [4,5,6]
];
for(let i = 0; i<mat1.length; i++){
for(let j =0; j<mat1[i].length ;j++){
    console.log(`Elementos [${i}][${j}] = ${mat1[i][j]}`);
}
}

//40. some todos numeros da matriz [[2,4],[6,8]]
let matrizSoma =  [
    [2,4],
    [6,8]
];
let somaMatriz = 0;
for(let i = 0; i<matrizSoma.length; i++){
for(let j = 0; j<matrizSoma[i].length ; j++){
    somaMatriz= somaMatriz + matrizSoma[i][j]
   
}
}
 console.log(`Soma dos elementos ${somaMatriz}`);



 //41.crie uma matriz 3x3 com numeros de 1 a 9

let matiti = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i = 0; i<matiti.length; i++ ){
console.log(matiti[i]);
}
    
//42.Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]
let mamati = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(mamati[0][0])
console.log(mamati[1][1])
console.log(mamati[2][2])


//antes estava errado
let matrizDiag = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for(let i = 0; i<matrizDiag.length; i++){
    console.log(matrizDiag[i][i]);
};



// 43: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10
let mamatiti = [
    [1, 2],
    [3, 4]
];
console.log("antes" , mamatiti);
mamatiti [0] [1]= 10;
console.log("depois", mamatiti);

//44. Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]
let matia = [
    [10, 20],
    [30, 40], 
    [50, 60]];

console.log (matia[0]);


// 45. Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]
let matrizexiba = [[1, 2], [3, 4], [5, 6]];



// 46. Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2
let matriz2x = [[1, 2], [3, 4]];
let valorrr = [];
for(let i = 0; i<matriz2x.length; i++ ){
    valorrr[i] = []
    for(let j =0; j<matriz2x[i].length; j++){
        valorrr[i][j] = matriz2x[i][j] * 2
    };
};
console.log(`normal: ${matriz2x}`);
console.log(`multiplado: ${valorrr}`);



////////////////// objetos ////////////////////////

// 47. Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}