document.getElementById('moon-icon').addEventListener('click', function() {
  const container = document.querySelector('.container');
  container.classList.toggle('dark-mode');
});
function togglePasswordVisibility(passwordFieldId, eyeIconClass, eyeSlashIconClass) {
  const passwordField = document.getElementById(passwordFieldId);
  const eyeIcon = document.querySelector(`.${eyeIconClass}`);
  const eyeSlashIcon = document.querySelector(`.${eyeSlashIconClass}`);
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.style.display = 'none';
    eyeSlashIcon.style.display = 'inline';
  } else {
    passwordField.type = 'password';
    eyeIcon.style.display = 'inline';
    eyeSlashIcon.style.display = 'none';
  }
}
let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
function registerUser(fullName, userName, email, password) {
  const emailExists = users.some(user => user.email === email);
  if (emailExists) {
    alert('This email is already registered.'); 
    return;
  } else if(emailExists) {
    users.push({userName});
    localStorage.setItem("users", JSON.stringify(users));
    alert('This username already registered');    // i just add here This username already registered
  }
   else {
    users.push({ fullName, userName, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert('Registration successful!');  
  }
}
function loginUser(identifier, password) {
  const user = users.find(user => (user.userName === identifier || user.email === identifier) && user.password === password);
  if (user) {
    alert('Login successful!');
  } else {
    alert('Invalid username/email or password.');
  }
}
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('register');
  const fullName = document.getElementById('fullName').value;
  const userName = document.getElementById('userName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }
  registerUser(fullName, userName, email, password);
  console.log(users);
  window.open('./login.html');
});