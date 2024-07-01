function encriptar() {
    var texto = document.getElementById("textoIngresado").value;
    if (texto != "") {
        var lista = texto.split('');
        var esValido = /^[a-z\s]+$/.test(texto);
        if (!esValido) {
            document.getElementById("error").style.color = "red";
            return
        }
        encriptarTexto(lista);
        textoFinal=lista.join('');
        sinError();
        mostarBotonCopiar(textoFinal);
    } else {
        sinTexto();
    }
}
function encriptarTexto(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        switch (element) {
            case 'a':
                array[index] = 'ai';
                break;
            case 'e':
                array[index] = 'enter';
                break;
            case 'i':
                array[index] = 'imes';
                break;
            case 'o':
                array[index] = 'ober';
                break;
            case 'u':
                array[index] = 'ufat';
                break;
        }
    }
}
function desencriptar() {
    console.log("Texto Desencriptado")
    mostarBotonCopiar();
}
function mostarBotonCopiar(texto) {
    document.getElementById("primerMensaje").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("btn-copiar").style.display = "block";
    document.getElementById("muestra").style.justifyContent = "space-between";
    document.getElementById("textoEncriptado").style.display = "block";
    document.getElementById("textoEncriptado").innerHTML=texto;
}

function sinTexto() {
    document.getElementById("primerMensaje").style.display = "block";
    document.getElementById("btn-copiar").style.display = "none";
    document.getElementById("muestra").style.justifyContent = "center";
    document.getElementById("textoEncriptado").style.display = "none";
}

function sinError() {
    document.getElementById("error").style.color = "#495057";
}