function verificarPassword() {
    const d1 = document.getElementById("digito1").value;
    const d2 = document.getElementById("digito2").value;
    const d3 = document.getElementById("digito3").value;
    const resultado = document.getElementById("resultado");

    const password = d1 + d2 + d3;

    if (password === "911") {
        resultado.textContent = "password 1 correcto"
        resultado.style.color = "green";
    } else if (password === "714") {
        resultado.textContent = "password 2 correcto"
        resultado.style.color = "green";
    } else {
         resultado.textContent = "password incorrecto"
        resultado.style.color = "red";
    }

    
}