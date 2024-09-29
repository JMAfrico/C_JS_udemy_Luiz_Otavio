//Objeto pessoa    
const pessoa = {
    nome : "Joao",
    idade : "32",
    genero : "Masculino"
};
console.log(pessoa.nome);

//Função factory pessoa
function createPerson(nome,idade,genero){
    return{
        nome:nome,
        idade: idade,
        genero: genero
    }
}
const pessoa1 = createPerson("Joao","32","Masculino");
console.log(pessoa1.genero);

//Função factory pessoa 2 modo
function createPerson2(nome,idade,genero){
    return{
        nome,
        idade,
        genero
    }
}
const pessoa2 = createPerson2("Elen","31","Faminino");
console.log(pessoa2.genero);

//Função factory pessoa 3 modo
function createPerson3(nome,idade,genero){
    return{nome,idade,genero}
}
const pessoa3 = createPerson2("Jill","55","Feminino");
console.log(pessoa3.idade);

//Objeto com função
const pessoa5 = {
    nome : "Joao",
    idade : "32",
    genero : "Masculino",
    sobre(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.genero} `);
    }   
};
pessoa5.sobre();