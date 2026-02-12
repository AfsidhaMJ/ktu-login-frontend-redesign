function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

function showLoading() {
  alert("Frontend-only prototype\nNo real login implemented");
}
