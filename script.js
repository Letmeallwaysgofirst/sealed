// Callback-Funktion für erfolgreichen Google-Login
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const idToken = googleUser.getAuthResponse().id_token;
    // Hier kannst du das idToken verwenden, um den Benutzer zu authentifizieren
    // Zum Beispiel kannst du es an den Server senden, um den Benutzer anzumelden
    // Anschließend kannst du die Empfehlungen basierend auf dem angemeldeten Benutzer anzeigen
    showRecommendations();
}

async function showRecommendations() {
    // Hier kannst du die Empfehlungen basierend auf dem angemeldeten Benutzer anzeigen
    // Zum Beispiel kannst du eine API-Anfrage senden, um die Empfehlungen abzurufen
    // und sie dann in der Web-App anzeigen
    // Beispiel:
    // const recommendations = await fetchRecommendations();
    // displayRecommendations(recommendations);
    document.getElementById('recommendations').classList.remove('hidden');
    document.querySelector('.login-form').style.display = 'none';
}
