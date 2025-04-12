document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  // This will stop the form from submitting
    console.log("Form submission prevented.");
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

