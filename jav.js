function mostraNome(){
    let criandoh1 = document.createElement("h1")
    let inputNome = document.querySelector("#nome")
    let inputIdade = document.querySelector("#idade")
    let textoNovo = document.createTextNode(`Bem vindo ${inputNome.value} , sua idade é ${inputIdade.value} `)

    criandoh1.appendChild(textoNovo);
    document.body.appendChild(criandoh1);
}
    let botaoOk = document.querySelector("#botao");
    botaoOk.onclik = mostraNome;