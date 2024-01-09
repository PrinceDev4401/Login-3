function checkLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'boaduprince2003@gmail.com' && password === 'lalafalamar') {
        alert('Login successful!');
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'Incorrect username or password';
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('password').style.border = '1px solid red';
    }
}