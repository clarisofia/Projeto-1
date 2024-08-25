const userForm = document.getElementById('userForm') as HTMLFormElement;
const messageDiv = document.getElementById('message') as HTMLDivElement;

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const userName = (document.getElementById('name') as HTMLInputElement).value;
    
    if (userName) {
        messageDiv.textContent = `Olá, ${userName}! Bem-vindo à nossa aplicação.`;
    } else {
        messageDiv.textContent = 'Por favor, insira seu nome.';
    }
});