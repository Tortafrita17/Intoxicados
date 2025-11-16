function toggleAlbumInfo(albumId, buttonElement) {
    const albumInfo = document.getElementById(albumId);
    
    if (albumInfo.style.display === 'block') {
        albumInfo.style.display = 'none';
        buttonElement.textContent = 'Leer más ▼';
    } else {
        albumInfo.style.display = 'block';
        buttonElement.textContent = 'Ocultar ▲';
    }
}