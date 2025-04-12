
const popup=document.querySelector('.pop-container');
const x=document.querySelector('.close-btn');
const y=document.querySelector('.container');
const z=document.querySelector('.navbar');
window.addEventListener('load',()=>{
    if(!sessionStorage.getItem('popupShown')){
    popup.classList.add('showpopup');
    popup.childNodes[1].classList.add('showpopup');
    y.style.opacity='0.4';
    z.style.opacity='0.4'; sessionStorage.setItem('popupShown','true');}
    else{
        popup.style.display='none';
    }
})
x.addEventListener('click', () => {
    popup.classList.remove('showpopup');
    popup.childNodes[1]?.classList.remove('showpopup');
    if (y) y.style.opacity = '1';
    if (z) z.style.opacity = '1';
});
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("p-container");

registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

function refreshPage() {
    location.reload();
    
}

const smallScreenRegisterButton = document.getElementById("go-to-register-btn");
const smallScreenRegisterContainer = document.getElementById("small-screen-register-container");
const smallScreenLoginContainer = document.getElementById("small-screen-login-container");
const smallScreenLoginButton = document.getElementById("go-to-login-btn");

smallScreenRegisterButton.addEventListener("click", showRegister)

smallScreenLoginButton.addEventListener("click", showLogin);

// Function to show the login form
function showLogin() {
    document.getElementById('register-form').style.display = 'none'; // Hide register form
    document.getElementById('login-form').style.display = 'block'; // Show login form
}

// Function to show the register form
function showRegister() {
    document.getElementById('login-form').style.display = 'none'; // Hide login form
    document.getElementById('register-form').style.display = 'block'; // Show register form
}
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



