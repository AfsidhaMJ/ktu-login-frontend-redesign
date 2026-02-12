const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
});

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Demo Login Page - UI Design Only");
});
