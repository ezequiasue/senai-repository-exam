document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const greetingMessage = `Olá, ${name}!`;
    document.getElementById('greetingMessage').textContent = greetingMessage;
});
