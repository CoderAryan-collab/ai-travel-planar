// Display alert when a feature is clicked
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('click', () => {
        alert("Explore destinations tailored to this theme!");
    });
});
