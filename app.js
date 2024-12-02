// Marker and GIF data
const markerData = [
    { pattern: 'markers/pattern-A.patt', gif: 'assets/earth_rotate.gif' },
];
// Create the AR.js scene
const scene = document.createElement('a-scene');
scene.setAttribute('embedded', '');
scene.setAttribute('arjs', 'sourceType: webcam; trackingMethod: best;');
document.body.appendChild(scene);

// Loop through marker data to create markers and GIFs
// markerData.forEach((data, index) => {
//     // Create a marker
//     const marker = document.createElement('a-marker');
//     marker.setAttribute('type', 'pattern');
//     marker.setAttribute('url', data.pattern); // Set custom pattern file
//     scene.appendChild(marker);

//     // Create a GIF for the marker
//     const gifImage = document.createElement('a-image');
//     gifImage.setAttribute('src', data.gif); // Set GIF file
//     gifImage.setAttribute('position', '0 0 0');
//     gifImage.setAttribute('scale', '2 2 2');
//     // gifImage.setAttribute('look-at', '[camera]'); // Ensure it faces the camera
//     marker.appendChild(gifImage);
// });

// Create a box element
  const box = document.createElement('a-box');

  // Set attributes for the box
  box.setAttribute('position', '0 0.5 0'); // Position above the marker
  box.setAttribute('rotation', '0 0 0'); // Default rotation
  box.setAttribute('color', '#4CC3D9'); // Blue color
  box.setAttribute('depth', '1'); // Depth of the box
  box.setAttribute('height', '1'); // Height of the box
  box.setAttribute('width', '1'); // Width of the box
  box.setAttribute('look-at', '[camera]'); // Make the box face the camera

  // Append the box to the marker
  marker.appendChild(box);

// Add a camera to the scene
const camera = document.createElement('a-entity');
camera.setAttribute('camera', '');
scene.appendChild(camera);
