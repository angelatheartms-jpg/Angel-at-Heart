// script.js

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

// Open the modal
btn.onclick = function() {
    modal.style.display = 'block';
}

// Close the modal when clicking the 'x'
span.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Donation form interaction
const donationForm = document.getElementById('donation-form');
donationForm.onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for your donation!'); // Simulate a thank you alert
    donationForm.reset(); // Reset the form
};