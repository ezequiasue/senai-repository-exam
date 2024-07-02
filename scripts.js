document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const greetingMessage = document.getElementById('greeting-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name && email) {
            greetingMessage.textContent = `Olá, ${name}!\nSeu email: (${email}) foi registrado com sucesso, obrigado.`;
        } else {
            greetingMessage.textContent = 'Por favor, insira seu nome e email.';
        }
    });
});
