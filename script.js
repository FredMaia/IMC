function calcular() {
  var alturatxt = document.getElementById("alturatxt");
  var altura = Number(alturatxt.value);

  var pesotxt = document.getElementById("pesotxt");
  var peso = Number(pesotxt.value);

  var imc = peso / (altura / 100) ** 2;

  var res = document.getElementById("res");

  if (alturatxt.value.length == 0 || pesotxt.value.length == 0) {
    alert("Verifique os valores digitados.");
  } else {
    res.innerHTML = `Seu IMC é de ${imc.toFixed(2)}`;
  }

  document.getElementById("alturatxt").value = ""
  document.getElementById("pesotxt").value = ""
}
