//users - persons
// type="text" - id="userName"
// type="password" - id="password"
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
        eyeSlashIcon.style.display = 'inline';
    }
    else {
        passwordField.type = 'password';
        eyeIcon.style.display = 'inline';
    }
}
let form = document.getElementById('form');
function loginUser(identifier, password) {
    const user = persons.find(user => (user.userName === identifier || user.email === identifier) && user.password === password);
    if (user) {
        alert('Login successful!');
    } else {
        alert('Invalid username/email or password.');
    }
}
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('login');
    // console.log(users);
    let getUsers = JSON.parse(localStorage.getItem("users"));
    console.log(getUsers);
    // window.open('./login.html')
    const userName = document.getElementById('userName');
    const password = document.getElementById('password');
  let user =  getUsers.find((item) =>{
        return item.userName == userName.value && item.password == password.value
    })

if (user) {
    window.open('./home.html')
}
else{
    alert('Not found')
}
});