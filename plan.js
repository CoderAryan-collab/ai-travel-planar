// plan.js

// Simulate the plan generation and sharing process
document.getElementById('planning-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Clear previous error or results
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('plan-result').style.display = 'none';
    document.getElementById('share-plan').style.display = 'none';

    // Fetch form data
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const days = document.getElementById('days').value;
    const preferences = document.getElementById('preferences').value;

    // Simulate plan generation (this would be replaced with actual API calls)
    setTimeout(function() {
        if (city.toLowerCase() === 'unknown') {
            // If city is not found
            document.getElementById('error-message').style.display = 'block';
        } else {
            // Generate a simple plan
            const planDetails = `
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Number of Days:</strong> ${days}</p>
                <p><strong>Preferences:</strong> ${preferences}</p>
            `;
            document.getElementById('plan-details').innerHTML = planDetails;
            document.getElementById('plan-result').style.display = 'block';

            // Show the "Share Plan" button
            document.getElementById('share-plan').style.display = 'inline-block';
        }
    }, 1000);
});

// Simulate the sharing of the plan
document.getElementById('share-plan').addEventListener('click', function() {
    alert('Your plan has been shared with others!');
    // Here you can implement sharing logic (e.g., API calls to share the plan)
});
