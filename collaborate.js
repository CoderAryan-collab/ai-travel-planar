// Tab Switching Logic
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

const thisIsATestVariable = "Hello test!";

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.tab;
        tabContents.forEach((content) => {
            content.id === target
                ? content.classList.add('active')
                : content.classList.remove('active');
        });
    });
});

// Chat Functionality
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        const msgDiv = document.createElement('div');
        msgDiv.textContent = message;
        chatMessages.appendChild(msgDiv);
        chatInput.value = '';
    }
});

// Suggestion Functionality
const suggestionInput = document.getElementById('suggestion-input');
const suggestionList = document.getElementById('suggestion-list');
const suggestionBtn = document.getElementById('suggestion-btn');

suggestionBtn.addEventListener('click', () => {
    const suggestion = suggestionInput.value.trim();
    if (suggestion) {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = suggestion;
        suggestionList.appendChild(suggestionItem);
        suggestionInput.value = '';
    }
});
