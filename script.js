function loadImage(imagePath) {
    const container = document.getElementById('image-container');
    container.innerHTML = `<img src="${imagePath}" alt="Selected Image">`;
}
