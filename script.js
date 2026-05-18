// TOGGLE PASSWORD
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', () => {

  if(password.type === 'password'){
    password.type = 'text';
    togglePassword.textContent = '🙈';
  }else{
    password.type = 'password';
    togglePassword.textContent = '👁';
  }

});

// LOGIN FORM
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e){

  e.preventDefault();

  const email = document.getElementById('email').value;
  const pass = password.value;

  if(email === '' || pass === ''){
    alert('Semua field wajib diisi!');
    return;
  }

  alert('Login berhasil!');

});