
document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    console.log('hello');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'bankingmodiul25.html';
    }
});