function contarCaracteres() {
  const input = document.getElementById("meuInput");
  const resultado = document.getElementById("resultado");

  const quantidade = input.value.length;
  resultado.textContent = `Quantidade de caracteres: ${quantidade}`;
}

function percorrerCaracteres() {
  const input = document.getElementById("meuInput");
  const texto = input.value;
  const resultado = document.getElementById("verificador");
  var contemEspeciais = false;
  var contemNumeros = false;
  var contemLetras = false;
  for (let i = 0; i < texto.length; i++) {
     if (texto[i] === '!' || texto[i] === '*' || texto[i] === '/' || texto[i] === '#'){
        contemEspeciais = true;
     }
     if (texto[i] == '1' || texto[i] == '2' || texto[i] == '3'){
        contemNumeros = true;
     }
     if (texto[i] == 'a' || texto[i] == 'b' || texto[i] == 'c'){
        contemLetras = true;
     }

  }

  if(contemLetras && contemEspeciais && contemNumeros ){
    resultado.textContent = 'Essa senha é forte';
  }else{
    resultado.textContent = 'Sua senha é fraca';
  }

}