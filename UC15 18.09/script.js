let contador = 10;

function mostrarCidade() {
    let cidade = document.getElementById("cidade").value;
    document.getElementById("mensagem").textContent =
        "Você escolheu viajar para " + cidade + "!";
}

function destacarMensagem() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "blue";
    mensagem.style.fontSize = "25px";
}

function aumentar() {
    contador++;
    document.getElementById("contador").textContent = contador;
}

function diminuir() {
    contador--;
    document.getElementById("contador").textContent = contador;
}

document.getElementById("btnCidade").onclick = mostrarCidade;
document.getElementById("btnEstilo").onclick = destacarMensagem;
document.getElementById("mais").onclick = aumentar;
document.getElementById("menos").onclick = diminuir;