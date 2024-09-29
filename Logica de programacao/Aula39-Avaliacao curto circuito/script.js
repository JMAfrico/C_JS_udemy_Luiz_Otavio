//O javascript retorna como false muitas opções de lógica de comparação
//Com isso ele entende alguns valores como false, exemplo:
//false,0,' '," ", ``, null, undefined, NaN

console.log('Joao' && 'Elen'); // Nesse caso vai retornar o valor da ultima string, validando que passou(true)
console.log('Joao' && '' && 'Elen');// Nesse caso, vai retornar a string do meio, vazia, significa que foi false

//Exemplo pratico - Função que só vai ser executada se uma condição for verdadeira

function falaOi(){
    return 'Oi';
}

//Usando if ficaria assim
const vaiExecutar = false;
if(vaiExecutar==true){
    falaOi();
}

//Usando avaliacao de curto circuito ficaria assim
//Só vai chegar no método fala oi se ambas as condicoes forem verdadeiras
//Como a constante 'vaiExecutar' está false, então a condição vai ser false e nao vai executar o falaOi
vaiExecutar && falaOi();



