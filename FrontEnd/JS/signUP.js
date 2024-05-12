/////////////////////////////////////////////////////////////signUP Page 
 



const signupForm = document.getElementById('Signin-form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  let isValid = true;

  
  if (password.length < 7) {
    isValid = false;
    document.getElementById('passAlart').textContent = 'Password must be at least 7 characters long.';
  } else if (password !== confirmPassword) {
    isValid = false;
    console.error('Passwords do not match.');
    document.getElementById('passAlart').textContent = 'Passwords must match.';
  }

  
  if (!isValid) {
    return; 
  }

  
  signupForm.reset();

  
  console.log('Signup data:', {
    firstName,
    lastName,
    age,
  });

  
});

