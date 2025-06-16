
function mudarTexto() {
      document.getElementById("titulo").innerText = "Você clicou no botão!";

      var nome = document.getElementById("camponome").value;
      if (nome == ""){
        document.getElementById("paragrafo").textContent = "ta vazio";
      }else{
        document.getElementById("paragrafo").textContent = "O nome dele é " + nome;
      }
}

function teste(){
    var nomeuser = document.getElementById("camponome").value;
    if(nomeuser == "admin"){
        alert("animal, nao pode");
        document.getElementById("camponome").value = "";
    }
}