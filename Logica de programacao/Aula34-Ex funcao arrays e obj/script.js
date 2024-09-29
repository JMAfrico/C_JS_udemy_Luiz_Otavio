function meuEscopo(){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    //Captura os dados do HTML
    function recebeDados(event){
        event.preventDefault();
        const nome = form.querySelector('#txtNome');
        const sobrenome = form.querySelector('#txtSobrenome');
        const peso = form.querySelector('#txtPeso');
        const altura = form.querySelector('#txtAltura');

        //Adiciona os dados preenchidos num objeto dentro de um array
        pessoas.push({
                nome:nome.nodeValue, 
                sobrenome:sobrenome.nodeValue, 
                peso: peso.nodeValue , 
                altura:altura.nodeValue
            });

        //adiciona no html os valores digitados
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    //reconhece o evento de submit quando clica no botao do formulario
    form.addEventListener("submit",recebeDados);
}
meuEscopo();



