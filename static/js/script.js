function verificarinimigo(){
    var nomeuser = document.getElementById("camponome").value;
    if(nomeuser == "kamyllha"){
        alert("essa pessoa é odiada por L");
        document.getElementById("camponome").value = "";
    }
}


function verificar() {

      var botao = document.getElementById("botao");
      var nome = document.getElementById("camponome").value;
      var email = document.getElementById("campoemail").value;
      var confirmaremail = document.getElementById("campoemailconfirm").value;
      var idade = document.getElementById("campoidade").value;

      if (nome == "" || email == "" || idade == ""){
        document.getElementById("paragrafo").textContent = "Campo em branco";
      }else if (email != confirmaremail){
        document.getElementById("paragrafo").textContent = "e-mail diferente na confimação";
      }else if (idade < 18){
        document.getElementById("paragrafo").textContent = "usuário com idade menor que 18 anos";
      }else{
        botao.type = "submit";
      }
}


function mudarTexto() {
      document.getElementById("titulo").innerText = "Você clicou no botão!";

      var nome = document.getElementById("camponome").value;
      var nome = document.getElementById("camponome").value;
      var nome = document.getElementById("camponome").value;

      if (nome != "" && email != ""){
        document.getElementById("paragrafo").textContent = "nao ta vazio";
      }else{
        document.getElementById("paragrafo").textContent = "Está sem nada";
      }
}

function teste(){
    var nomeuser = document.getElementById("camponome").value;
    if(nomeuser == "admin"){
        alert("animal, nao pode");
        document.getElementById("camponome").value = "";
    }
}

