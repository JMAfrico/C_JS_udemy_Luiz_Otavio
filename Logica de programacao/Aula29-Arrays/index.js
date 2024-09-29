//Arrays
//lista de nomes

const alunos = ['alice','maria','fatima'];

console.log(alunos);
console.log(alunos[1]);

//alterando aluno

alunos[0] = 'Aline';
console.log(alunos);
console.log(alunos[0]);

//adicionando aluno no indice
//alunos[3] = 'Luiza'
console.log(alunos)
console.log(alunos[3]);

//adicionando aluno na próxima posição
alunos.push('Tatiane')

//adicionando um aluno na primeira posição [0]
alunos.unshift('Renata');

//remove o ultimo elemento do array
alunos.pop(); 

//remove o primeiro elemento do array
alunos.shift();

//deleta o elemento do indice
delete alunos[2]

//visualizando a quantidade de elementos do array
console.log("Quantidade de alunos: " + alunos.length)

console.log(alunos);

//ver itens de uma posição inicial até a final
console.log(alunos.slice(0,2))