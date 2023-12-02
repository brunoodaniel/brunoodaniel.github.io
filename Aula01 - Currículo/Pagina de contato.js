function submitForm() {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var msg = document.getElementById('mensagem');

    if (nome.value === '' || email.value === '' || msg.value === '') {
        alert('Por favor, preencha todos os campos.');
        if (nome.value === '') {
            nome.style.borderColor = 'red';
        } else {
            nome.style.borderColor = 'azure';
        }
        if (email.value === '') {
            email.style.borderColor = 'red';
        } else if (!isValidEmail(email.value)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            email.style.borderColor = 'red';
        } else {
            email.style.borderColor = 'azure';
        }
        if (msg.value === '') {
            msg.style.borderColor = 'red';
        } else {
            msg.style.borderColor = 'azure';
        }
    } else if (!isValidEmail(email.value)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        email.style.borderColor = 'red';
    } else {
        alert("Mensagem enviada!\n" + "Nome: " + nome.value + "\nEmail: " + email.value + "\nMensagem: " + msg.value);
        nome.style.borderColor = 'azure';
        email.style.borderColor = 'azure';
        msg.style.borderColor = 'azure';
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

var botao = document.getElementById('voltar');
    
  botao.addEventListener('click', function() {
      window.location.href = 'index - aula01.html';
});
