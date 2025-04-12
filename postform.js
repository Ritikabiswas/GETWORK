document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Reservation Submitted Successfully!');
    // You can add more code here to handle form submission, such as sending data to a server
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});