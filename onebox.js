document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display email list
    fetch('/onebox/list')
        .then(response => response.json())
        .then(data => {
            const emailList = document.getElementById('email-list');
            data.forEach(email => {
                const div = document.createElement('div');
                div.classList.add('email-item');
                div.innerHTML = `<strong>${email.sender}</strong> - ${email.subject} <span>${email.timestamp}</span>`;
                div.addEventListener('click', () => loadEmail(email.id));
                emailList.appendChild(div);
            });
        });

    // Load email content
    function loadEmail(emailId) {
        fetch(`/onebox/${emailId}`)
            .then(response => response.json())
            .then(data => {
                const emailContent = document.getElementById('email-content');
                emailContent.innerHTML = `<h3>${data.subject}</h3><p>${data.body}</p>`;
            });
    }

    // Toggle reply box
    document.getElementById('reply-button').addEventListener('click', function() {
        document.getElementById('reply-box').classList.toggle('hidden');
    });

    // Send reply
    document.getElementById('send-reply').addEventListener('click', function() {
        const replyText = document.getElementById('reply-text').value;
        const emailId = /* get the current email ID */
        fetch(`/reply/${emailId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'email@example.com',
                to: 'recipient@example.com',
                subject: 'Re: Subject',
                body: replyText
            })
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        if (event.key === 'D') {
            const emailId = /* get the current email ID */
            fetch(`/onebox/${emailId}`, {
                method: 'DELETE'
            });
        } else if (event.key === 'R') {
            document.getElementById('reply-box').classList.toggle('hidden');
        }
    });

    // Toggle dark mode
    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Custom text editor buttons
    document.getElementById('save-button').addEventListener('click', function() {
        // Save functionality
    });

    document.getElementById('variables-button').addEventListener('click', function() {
        // Variables functionality
    });
});
