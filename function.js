function calcularIMC() {
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;

  if (altura == "" || peso == "") {
    alert("Por favor, preencha todos os campos");
    return;
  }

  altura = altura.replace(",", ".", " ");
  const imc = peso / (altura * altura);
  document.getElementById("resultado").value = imc.toFixed(2);

  const classification = classificate(imc);
  
  document.getElementById("classificacao").value = classification;
}

function limparFormulario() {
  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("classificacao").value = "";
}


const classificate = (imc) => {
  const stage = stages(imc);
  const classification = {
    "stage1": "Abaixo do peso",
    "stage2": "Peso normal",
    "stage3": "Sobrepeso",
    "stage4": "Obesidade grau I",
    "stage5": "Obesidade grau II",
    "stage6": "Obesidade grau III",
  }
  return classification[stage];
}

const stages = (imc) => {
  if (imc < 18.5) {
    return "stage1";
  } else if (imc < 25) {
    return "stage2";
  } else if (imc < 30) {
    return "stage3";
  } else if (imc < 35) {
    return "stage4";
  } else if (imc < 40) {
    return "stage5";
  } else {
    return "stage6";
  }
}