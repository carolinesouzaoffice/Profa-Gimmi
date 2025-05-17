document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatBox = document.getElementById('chat-box');

    // Função para adicionar uma mensagem na caixa de chat
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = message; // Usa textContent para segurança contra XSS
        chatBox.appendChild(messageElement);

        // Rola para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Função para enviar a mensagem
    function sendMessage() {
        const message = userInput.value.trim(); // Pega o texto e remove espaços extras

        if (message) { // Verifica se a mensagem não está vazia
            addMessage(message, 'user'); // Adiciona a mensagem do usuário

            // --- AQUI É ONDE A CONEXÃO COM O BACKEND ACONTECERIA EM UMA APLICAÇÃO REAL ---
            // Você usaria fetch() ou XMLHttpRequest para enviar a 'message' para o seu servidor Python
            // e então, ao receber a resposta, chamaria addMessage() com a resposta do bot.
            // Exemplo conceitual (NÃO FUNCIONA SEM BACKEND):
            /*
            fetch('/api/chat', { // Exemplo de URL do seu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message }),
            })
            .then(response => response.json())
            .then(data => {
                addMessage(data.reply, 'bot'); // Adiciona a resposta do bot
            })
            .catch((error) => {
                console.error('Erro ao enviar mensagem:', error);
                addMessage('Desculpe, ocorreu um erro.', 'bot'); // Mensagem de erro
            });
            */
            // --- FIM DA SEÇÃO DE CONEXÃO COM BACKEND ---

            // SIMULAÇÃO DE RESPOSTA DO BOT (REMOVE ISSO QUANDO CONECTAR AO BACKEND REAL)
            setTimeout(() => {
                 addMessage("Esta é uma resposta simulada do bot para: \"" + message + "\"", 'bot');
            }, 500); // Simula um pequeno delay na resposta

            userInput.value = ''; // Limpa o campo de entrada
        }
    }

    // Enviar mensagem ao clicar no botão
    sendButton.addEventListener('click', sendMessage);

    // Enviar mensagem ao apertar Enter no campo de texto
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita a quebra de linha padrão do Enter
            sendMessage();
        }
    });
});