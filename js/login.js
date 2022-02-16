
document.getElementById('login-submit').addEventListener('click', function(){
    // Email
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    // Password
    const passwordField = document.getElementById('password-field');
    const userPass = passwordField.value;

    if( userEmail == 'sontan@baap.com' && userPass == 'secret'){
        window.location.href = 'banking.html'
    }else{
        alert('invalid email or password')
    }
});

