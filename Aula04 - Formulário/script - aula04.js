function submitForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || msg === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (!isValidEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
    } else {
        alert(nome + ' ' + email + ' ' + msg + ' ');
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}