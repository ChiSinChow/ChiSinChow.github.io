// Marker and GIF data
const markerData = [
    { pattern: 'https://drive.google.com/drive/u/1/folders/15PXp9CA4oeXG5CR9X7Uj45kWK1v9F-nm', gif: 'https://drive.google.com/drive/u/1/folders/11uaSKnIa9rbgLLGA0fOjblcf0BTjxVfX' },
];
// Create the AR.js scene
const scene = document.createElement('a-scene');
scene.setAttribute('embedded', '');
scene.setAttribute('arjs', 'sourceType: webcam; trackingMethod: best;');
document.body.appendChild(scene);

// Loop through marker data to create markers and GIFs
markerData.forEach((data, index) => {
    // Create a marker
    const marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('url', data.pattern); // Set custom pattern file
    scene.appendChild(marker);

    // Create a GIF for the marker
    const gifImage = document.createElement('a-image');
    gifImage.setAttribute('src', data.gif); // Set GIF file
    gifImage.setAttribute('position', '0 0 0');
    gifImage.setAttribute('scale', '2 2 2');
    gifImage.setAttribute('look-at', '[camera]'); // Ensure it faces the camera
    marker.appendChild(gifImage);

  // Append the box to the marker
  marker.appendChild(box);
});

// Add a camera to the scene
const camera = document.createElement('a-entity');
camera.setAttribute('camera', '');
scene.appendChild(camera);
