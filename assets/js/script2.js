function verificarStickers() {
    const s1 = parseInt(document.getElementById("sticker1").value) || 0;
    const s2 = parseInt(document.getElementById("sticker2").value) || 0;
    const s3 = parseInt(document.getElementById("sticker3").value) || 0;

    const total = s1 + s2 + s3 ;

    const resultado = document.getElementById("resultado");
    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers.`;
        resultado.style.color = "green"

    }
    else {
        resultado.textContent = "LLevas demasiados stickers.";
        resultado.style.color = "red";
    }
}