// Save user to localStorage
function loginUser(user) {
  localStorage.setItem("bookhaven_user", JSON.stringify(user));
  window.location.href = "home.html";
}

// Sign out
function logoutUser() {
  localStorage.removeItem("bookhaven_user");
  window.location.href = "login.html";
}

// Check login state on protected pages
function checkAuth() {
  const user = JSON.parse(localStorage.getItem("bookhaven_user"));
  if (!user) {
    window.location.href = "login.html";
  }
}

// Run this on logout.html or logout button
function handleLogout() {
  google.accounts.id.disableAutoSelect();
  logoutUser();
}
