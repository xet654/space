const NASA_API_KEY = 'YBLeD1qCwBZM7kzMPS4Zi3KKFQ2LKzidNmdeiIbu';
const NASA_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

async function fetchNasaImageAndFact() {
    try {
        // Fetch NASA image data
        const response = await fetch(NASA_API_URL);
        const data = await response.json();

        // Update background and image
        document.body.style.backgroundImage = `url(${data.url})`;
        document.getElementById('nasa-image').src = data.url;

        // Update space fact
        document.getElementById('space-fact').textContent = data.explanation;
    } catch (error) {
        console.error('Error fetching NASA data:', error);
    }
}

document.addEventListener("DOMContentLoaded", fetchNasaImageAndFact);







