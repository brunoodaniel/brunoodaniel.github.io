function submitForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var opcao = document.getElementById('opcao').value;

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (!isValidEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
    } else {
        alert(nome + ' ' + email + ' ' + opcao + ' ');
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}