//Funções

//1- Funções Comuns
//sem parâmetro
function saudacao1(){
    console.log('Bom dia')
}

//com parâmetro
function saudacao2(nome){
    console.log(`Bom dia ${nome}`);
}

//com parâmetro e com retorno
function soma(x,y){
    let resultado = x + y;
    return resultado;
}

//valor padrão, caso não seja enviado nenhum valor no parâmetro
function soma(x=1,y=1){
    let resultado = x + y;
    return resultado;
}

saudacao2("joao");
console.log(soma(1,2));
console.log(soma());

//2- Funcão anonima, declaro uma função já atribuindo a uma constante
const resultado = function(x,y){
    let resultado = x + y;
    return resultado;
};

console.log(resultado(1,9));


//3- Arrow function
const multiplicar = (x,y) => {
    let resultado = x * y;
    return resultado;
};

console.log(multiplicar(2,9));