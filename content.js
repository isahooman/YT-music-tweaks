// Hide the main panel
document.getElementById('main-panel').style.display = 'none';

// Set no max width for #side-panel
const sidePanel = document.getElementById('side-panel');
if (sidePanel) {
    sidePanel.style.maxWidth = 'none';
}

// Set custom CSS properties on ytmusic-player-page#player-page
const playerPage = document.querySelector('ytmusic-player-page#player-page');
if (playerPage) {
    playerPage.style.setProperty('--ytmusic-player-page-vertical-padding', '0px');
    playerPage.style.setProperty('--ytmusic-player-page-horizontal-padding', '0px');
    playerPage.style.setProperty('--ytmusic-player-page-content-gap', '20px');
    playerPage.style.setProperty('--ytmusic-player-page-side-panel-width', '100%');
}
