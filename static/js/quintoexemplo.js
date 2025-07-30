//para pegar o elemento por meio do id, use o getElementById
const abrirModalVar = document.getElementById('abrirModalBtn');
const meuModal = document.getElementById('meuModal');

//para pegar classes de elementos, use o querySelector
const fecharModalVar = document.querySelector('.fechar-modal-btn');

function abrirModal() {
    meuModal.style.display = 'flex';

}
function fecharModal() {
    meuModal.style.display = 'none';

}
// precisamos adicionar  ouvintes de evento (event listeners). isso ajuda a gerar responsividade na pag

abrirModalVar.addEventListener('click', abrirModal);
fecharModalVar.addEventListener('click', fecharModal);

