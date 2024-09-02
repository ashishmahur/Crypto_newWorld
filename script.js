// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('Crypto Dummy Page loaded');

    const sendMessageButton = document.getElementById('sendMessage');
    const userInput = document.getElementById('userInput');
    const chatlog = document.getElementById('chatlog');

    sendMessageButton.addEventListener('click', async function () {
        const message = userInput.value;
        if (!message.trim()) return;

        // Display user message in chat log
        chatlog.innerHTML += <div class="user-message">${message}</div>;
        userInput.value = '';

        // Call the chatbot API
        const response = await getChatbotResponse(message);
        
        // Display chatbot response in chat log
        chatlog.innerHTML += <div class="bot-message">${response}</div>;
        chatlog.scrollTop = chatlog.scrollHeight;
    });

    async function getChatbotResponse(message) {
        try {
            // Replace this URL with your chatbot API endpoint
            const response = await fetch('https://api.manychat.com/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            const data = await response.json();
            return data.reply; // Adjust based on the API response structure
        } catch (error) {
            console.error('Error:', error);
            return 'Sorry, there was an error.';
        }
    }
});