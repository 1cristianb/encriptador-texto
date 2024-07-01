document.getElementById("textoEncriptado").style.display = "none";
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
function desencriptarTexto(texto) {
    var textoDesencriptado = texto;
    textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
    textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');
    return textoDesencriptado;
}
function desencriptar() {
    var texto = document.getElementById("textoIngresado").value;
    if (texto != "") {
        var esValido = /^[a-z\s]+$/.test(texto);
        if (!esValido) {
            document.getElementById("error").style.color = "red";
            return
        }
        textoFinal = desencriptarTexto(texto);
        sinError();
        mostarBotonCopiar(textoFinal);
    } else {
        sinTexto();
    }
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
    document.getElementById("primerMensaje").style.display = "flex";
    document.getElementById("btn-copiar").style.display = "none";
    document.getElementById("muestra").style.justifyContent = "center";
    document.getElementById("textoEncriptado").style.display = "none";
}
function copiarTexto(){
    var textoACopiar = document.getElementById("textoEncriptado").innerText;
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            console.log('Contenido copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar', err);
        });
}

function sinError() {
    document.getElementById("error").style.color = "#495057";
}