//your JS code here. If required.
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to ignore 'a', 'an', and 'the'
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands
const sortedBands = bands.sort((a, b) => {
  const bandA = stripArticle(a).toLowerCase();
  const bandB = stripArticle(b).toLowerCase();
  return bandA.localeCompare(bandB);
});

// Render the list
const bandList = document.getElementById('band');
bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

