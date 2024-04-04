const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declare an array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declare the alternative text for each image file */
const altTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'A scenic mountain landscape',
  'pic3.jpg': 'A cute kitten playing with a ball',
  'pic4.jpg': 'A colorful sunset over the ocean',
  'pic5.jpg': 'A close up to beautiful butterfly', 
};

/* Loop through images */
imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + filename); // Set the image source
  newImage.setAttribute('alt', altTexts[filename]); // Set the alternative text
  thumbBar.appendChild(newImage); // Append the new image to the thumb-bar
  // Add click event listener to each thumbnail image
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', 'images/' + filename); // Set displayed image source
    displayedImage.setAttribute('alt', altTexts[filename]); // Set displayed image alternative text
  });
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light'); // Change button class to light
    btn.textContent = 'Lighten'; // Change button text content
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Darken overlay
  } else {
    btn.setAttribute('class', 'dark'); // Change button class to dark
    btn.textContent = 'Darken'; // Change button text content
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Lighten overlay
  }
});
