// script.js

// Function to handle form submission
document.getElementById('planning-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get values from the form
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const days = document.getElementById('days').value;
    const preferences = document.getElementById('preferences').value;

    // Prepare the data to send to the API
    const data = {
        country,
        city,
        days,
        preferences
    };

    // Call the API
    const response = await fetch('/api/generatePlan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    // Handle the result
    if (response.ok) {
        // Show the generated plan
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('plan-result').style.display = 'block';
        document.getElementById('plan-details').innerText = result.plan;

        // Enable share button
        document.getElementById('share-plan').style.display = 'inline-block';
    } else {
        // Show error message if city is not found
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('plan-result').style.display = 'none';
    }
});

// Handle share plan functionality
document.getElementById('share-plan').addEventListener('click', function () {
    // Simulate sharing the plan with others
    alert('Your plan has been shared with others!');
});
