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
// Schritt 1: Datenabruf
async function fetchWinrateData() {
    try {
        const response = await axios.get('https://gudecks.com/meta/card-rankings?gameMode=7&timeFrame=15');
        return response.data; // Gibt die abgerufenen Daten zurück
    } catch (error) {
        console.error('Error fetching winrate data:', error);
        return null;
    }
}

// Beispiel für die Verwendung des Datenabrufs
async function showWinrateData() {
    const winrateData = await fetchWinrateData();
    if (winrateData) {
        console.log('Winrate data:', winrateData);
        // Hier kannst du die Datenverarbeitung und -anzeige durchführen
    } else {
        console.log('Failed to fetch winrate data');
    }
}
