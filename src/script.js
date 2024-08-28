var entradaTexto = document.querySelector("#criptografia-entrada");
var resultadoCriptografia = document.querySelector("#criptografia-resultado");

var botaoCriptografa = document.querySelector(".botao-criptografa");
var botaoDescriptografa = document.querySelector(".botao-descriptografa");
var botaoCopiar = document.querySelector(".copia-resultado");

function criptografaTexto() {
    var textoOriginal = entradaTexto.value.trim().toLowerCase();

    if (textoOriginal) {
        var textoCriptografado = trocaLetras(textoOriginal);
        resultadoCriptografia.value = textoCriptografado;
        limpaArea();
    } else {
        resultadoCriptografia.value = "Nenhuma mensagem encontrada...";
    }
}

function descriptografaTexto() {
    var textoCriptografado = entradaTexto.value.trim();

    if (textoCriptografado) {
        var textoDescriptografado = retornaLetras(textoCriptografado);
        resultadoCriptografia.value = textoDescriptografado;
        limpaArea();
    } else {
        resultadoCriptografia.value = "Nenhuma mensagem encontrada...";
    }
}

function trocaLetras(textoOriginal) {
    return textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function retornaLetras(palavraCriptografada) {
    return palavraCriptografada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function limpaArea() {
    entradaTexto.value = "";
}

function copiaResultado() {
    resultadoCriptografia.select();
    document.execCommand("copy");
}

botaoCriptografa.addEventListener("click", criptografaTexto);
botaoDescriptografa.addEventListener("click", descriptografaTexto);
botaoCopiar.addEventListener("click", copiaResultado);
