// var nome = 'Antonio Rungo';
// var age = 39;
// var age2 = 10;
// var frase = 'Japão é a melhor equipe do mundo!';

// // alert(nome + ' tem ' + age);
// // alert(age + age2);

// console.log(nome);
// console.log(age + age2);
// console.log(frase.replace('Japão', 'Portugal'));
// // alert(frase.replace('Japão', 'Brasil'));
// console.log(frase.toLocaleLowerCase());
// console.log(frase.toLocaleUpperCase());

// Array e Dicionario
/*var lista = ['maça', 'pera', 'laranja'];
lista.push('uva');
lista.pop();
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(' - '));*/

// Dicionario
/*
var fruta = { nome: 'maça', cor: 'vermelha' };
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

/*
var frutas = [
  { nome: 'maça', cor: 'vermelha' },
  { nome: 'uva', cor: 'roxa' },
  { nome: 'laranja', cor: 'amarela' },
];
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[0].cor);
*/

// Condicionais, laços de repetição e Date
/*
var idade19 = prompt('Qual é sua idade?');
// var idade = 18;
if (idade >= 18) {
  alert('Maior de idade');
} else {
  console.log('Menor de idade');
}
*/
/*
var count = 0;

while (count <= 5) {
  console.log(count);
  count++;
}

var count;

for (count = 0; count <= 5; count++) {
  console.log(count);
}
*/

// Date
/*var d = new Date();
alert(d.getMonth() + 1);
alert(d.getDate());
alert(d.getHours());
// alert('Digital' + form);
alert (“Digital Innovation One:” + formacoes)
*/

/*
function soma(n1, n2) {
  return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}
alert(setReplace('Vai Japão', 'Japão', 'Brasil'));
*/

// var validar = 0;
/*function validaIdade(idade) {
  var validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt('Qual é sua idade?');
console.log(validaIdade(idade));
*/

// Manipulando elementos

function clicou() {
  document.getElementById('agradecimento').innerHTML =
    '<b>Obrigado por clicar</b>';

  //   console.log(document.getElementById('agradecimento'));
  //   alert('Obrigado por clicar');
}

function redirecionar() {
  window.open('https://globallab.org/');
  //   window.location.href = 'https://globallab.org/';
}

function trocar(elemento) {
  //   document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mause!';
  elemento.innerHTML = 'Obrigado por passar o mause!';
  //   alert('Trocar texto');
}

function voltar(elemento) {
  //   document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui!';
  elemento.innerHTML = 'Passe o mouse aqui!';
}

function load() {
  alert('pagina carregada!');
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}
