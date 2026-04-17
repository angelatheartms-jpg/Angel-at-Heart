// Enhanced script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.getElementById('donation-form');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');

form.addEventListener('submit', function (e) {
    let valid = true;
    if (nameInput.value.trim() === '') {
        valid = false;
        alert('Name is required.');
    }
    if (amountInput.value.trim() === '' || isNaN(amountInput.value) || amountInput.value <= 0) {
        valid = false;
        alert('Please enter a valid donation amount.');
    }
    if (!valid) {
        e.preventDefault();
    }
});

// Donation Tracking
let totalDonations = 0;
const trackDonation = (amount) => {
    totalDonations += amount;
    console.log(`Total Donations: $${totalDonations}`);
};

// Example of tracking a donation
// trackDonation(50);  // Call this function when a donation is successfully made.