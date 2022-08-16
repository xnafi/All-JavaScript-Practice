document.getElementById('submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const emaiId = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(emaiId, password);
    if (emaiId == "amarbank@ami.com" && password == "132580") {
        alert('logged in')
    } else {
        alert('Please Try to remember or get out of here !!');
    }
    emailField.value = '';
    passwordField.value = '';
})