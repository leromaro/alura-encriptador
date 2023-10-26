document.getElementById("btn-encript").onclick = function() {
    var text = document.getElementById("txt-encript").value;
        if (text.length > 0){
        encriptar()
        }else{
            document.getElementById("txt-desencript").innerHTML = "Debe ingresar algo en el campo"
        }
};
function encriptar(){
    var text = document.getElementById("txt-encript").value;
    var textCifrado = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("txt-desencript").innerHTML = textCifrado;
    document.getElementById("btn-copiar").style.display = "block";
    document.getElementById("borrar").style.display = "none";
}

document.getElementById("btn-desencript").onclick = function() {
    desencriptar()
};
function desencriptar(){
    var text = document.getElementById("txt-encript").value;
    var textCifrado = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("txt-desencript").innerHTML = textCifrado;
}

document.getElementById("btn-copiar").onclick = function(){
    copiar();
}
function copiar(){
    var text = document.getElementById("txt-desencript").textContent;
    document.getElementById("txt-encript").value = text;
    
    //copia del portapapeles
    // navigator.clipboard.readText()
    // .then((text) => (document.getElementById("txt-encript").value = text));
}