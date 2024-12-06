
// Call-to-action button animation
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('.cta-button').innerText = "Let’s Start Planning!";
});

document.getElementById('start-planning-btn').addEventListener('click', function() {
    window.location.href = 'plan.html'; // Redirect to the start-planning page
});
