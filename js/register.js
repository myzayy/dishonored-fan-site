document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;
    // password verification
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Passwords do not match.';
    } else {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Passwords match.';
    }
    //alerts
    if (isValid) {
        alert('Registration successful!');
    } else {
        alert('Please correct the highlighted errors.');
    }
});

//password matching
var check = function () {
    if (document.getElementById('password').value ===
        document.getElementById('confirm-password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Passwords match.';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Passwords do not match.';
    }
};
//call function check
document.getElementById('password').addEventListener('input', check);
document.getElementById('confirm-password').addEventListener('input', check);
