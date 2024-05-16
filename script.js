async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://example.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await response.json();
        localStorage.setItem('authToken', data.token); // Token im lokalen Speicher speichern
        showRecommendations();
    } catch (error) {
        console.error('Error logging in:', error);
        const loginError = document.getElementById('login-error');
        loginError.textContent = 'Login failed. Please check your credentials.';
        loginError.style.display = 'block';
    }
}

async function showRecommendations() {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        // Benutzer ist nicht angemeldet, zeige Anmeldeformular
        return;
    }

    const sealedDeck = await fetchSealedDeck(authToken);
    if (!sealedDeck) {
        // Fehler beim Abrufen des versiegelten Decks
        return;
    }

    displaySealedDeck(sealedDeck);
    generateRecommendations(sealedDeck);

    // Zeige Empfehlungen und verstecke Anmeldeformular
    document.getElementById('recommendations').classList.remove('hidden');
    document.querySelector('.login-form').style.display = 'none';
}
