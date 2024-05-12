

const signinForm = document.getElementById('Signin-form');
const signinButton = document.getElementById('Signinbtn');


signinButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission

 
  const username = document.getElementById('userName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  
  document.getElementById('nameAlart').textContent = '';
  document.getElementById('emailAlart').textContent = '';
  document.getElementById('passAlart').textContent = '';

  
  
  let isValid = true;

  
  if (username.length < 8) {
    isValid = false;
    document.getElementById('nameAlart').textContent = 'Username must be at least 8 characters long.';
  }

  
  if (password.length < 7) {
    isValid = false;
    document.getElementById('passAlart').textContent = 'Password must be at least 7 characters long.';
  }

  
  if (!isValid) {
    return;
  }

  
  signinForm.reset();

  
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password); 

  
});