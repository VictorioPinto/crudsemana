function calcImc() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    alert("Seu imc é" + peso / (altura * altura))

}
  