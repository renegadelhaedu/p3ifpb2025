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
  var contem = false;
  for (let i = 0; i < texto.length; i++) {
     if (texto[i] === 'a'){
      contem = true;
     }
  }

  if(contem){
    resultado.textContent = 'tem a letra a neste input';
  }else{
    resultado.textContent = 'NAO tem a letra a neste input';
  }

}