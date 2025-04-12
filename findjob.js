

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            var contactDiv = this.closest(".card-body").querySelector(".contact-info");
            const buttons = contactDiv.getElementsByClassName('btn');
            
            if (contactDiv.style.display === "none" || contactDiv.style.display === "") {
                contactDiv.style.display = "flex";
                contactDiv.style.justifyContent = "space-around";
                contactDiv.style.alignItems = "center";
                contactDiv.style.gap = "160px";
                contactDiv.style.margin = "5px";
                for (let btn of buttons) {
                    btn.style.padding = "5px 10px";
                    btn.style.fontSize = "12px";
                    btn.style.minWidth = "70px";
                    btn.style.height = "30px";
                }
            } else {
                contactDiv.style.display = "none";
            }
        });
    });
});

function callNow(phoneNumber) {
    window.location.href = "tel:" + phoneNumber;
}

function sendMail(email) {
    window.location.href = "mailto:" + email;
}
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



