function encriptar() {
    var texto = document.getElementById("textoIngresado").value;
    if (texto != "") {
        var lista = texto.split('');
        var esValido = /^[a-z\s]+$/.test(texto);
        if (!esValido) {
            document.getElementById("error").style.color = "red";
            return
        }
        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];
            console.log(element);
        }
        sinError();
        mostarBotonCopiar();
    } else {
        sinTexto();
    }
}

function desencriptar() {
    console.log("Texto Desencriptado")
    mostarBotonCopiar();
}
function mostarBotonCopiar() {
    document.getElementById("primerMensaje").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("btn-copiar").style.display = "block";
    document.getElementById("muestra").style.justifyContent = "end";
}

function sinTexto() {
    document.getElementById("primerMensaje").style.display = "block";
}

function sinError(){
    document.getElementById("error").style.color = "#495057";
}