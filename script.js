function publicarComentario() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const email = document.getElementById('email').value;

    let painel = document.getElementById('listaComentarios');

    if (mensagem.length == 0 || nome.length == 0 || email.length == 0) {
        alert("Por favor, preencha todos os campos antes de publicar seu comentário.");
        return;
    }
    
    painel.innerHTML += "<p><strong>" + nome + "</strong> (" + email + "):<br>" + mensagem + "</p>";

    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mensagem').value = "";
}