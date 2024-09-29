// 1- declaração de função // (hoisting) = Não importa onde está a funcao(abaixo, acima da chamada, ela executa)

falaOi()
function falaOi(){
    console.log('Oie');
}
falaOi();

//---//

// 2- First class objects
// Function expression = Jogo o valor de uma função em uma variavel const
const souUmDado = function(){
    console.log('Sou um dado');
}
//assim a constante passa a executar como se fosse uma função
souUmDado();

//posso criar uma função que executa função no parametro
function executaFuncao(funcao) {
 funcao()   
}
executaFuncao(souUmDado)

//--//

//3- Arrow function 
const localizarCarro = () =>{
    console.log('Buscando carro');
}
localizarCarro();

//4- Funcao dentro de um objeto
const obj = {
    falar(){
        console.log('falar');
    }
}
obj.falar();
