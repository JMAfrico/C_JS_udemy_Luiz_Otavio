//PRIMITIVOS, NOS REFERIMOS AOS TIPOS DE DADOS IMUTAVEIS(onde o valor é copiado)  
//REFERENCIA, NOS REFERIMOS AOS TIPOS DE DADOS MUTAVEIS(onde é apontado para o valor original)

//Primitivos imutaveis - string, number, boolean,undefined,null,(big int, symbol)
let a = "A"
let b = a ; // Cópia
console.log(a,b);

//Referência - Array, Objeto, function
let d = ["1","2","3"]
let e = d; // referencia para o d
let x = [...d] //copia de d para x
console.log(e,d);

const pessoa={
    nome: 'Joao',
    sobrenome: 'Marcos'
}

console.log(pessoa);
const t = pessoa;
console.log(t);
