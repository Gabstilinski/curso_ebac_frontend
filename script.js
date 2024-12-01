// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do DOM
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const form = document.getElementById('cadastroForm');

    // Máscara para o campo de telefone
    $(telefoneInput).mask('(00) 00000-0000');

    // Função para validar o e-mail usando regex simples
    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    // Evento de envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de envio

        // Valida se os campos estão preenchidos corretamente
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const telefone = telefoneInput.value.trim();

        if (nome === '') {
            alert('Por favor, insira o seu nome.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (telefone.length !== 15) { // Tamanho esperado: (XX) XXXXX-XXXX
            alert('Por favor, insira um número de telefone válido.');
            return;
        }

        // Caso todas as validações passem, exibe mensagem de sucesso
        alert('Cadastro realizado com sucesso!');
        form.reset(); // Limpa o formulário após o envio
    });

    // Evento para manipulação de mudança nos campos
    nomeInput.addEventListener('input', function() {
        if (nomeInput.value.trim() !== '') {
            nomeInput.classList.remove('is-invalid');
        }
    });

    emailInput.addEventListener('input', function() {
        if (validarEmail(emailInput.value.trim())) {
            emailInput.classList.remove('is-invalid');
        }
    });

    telefoneInput.addEventListener('input', function() {
        if (telefoneInput.value.length === 15) {
            telefoneInput.classList.remove('is-invalid');
        }
    });
});
