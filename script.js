function togglePasswordVisibility() {
  const pwdInput = document.getElementById('password');
  const icon = document.getElementById('toggleLock');
  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    icon.classList.remove('fa-lock');
    icon.classList.add('fa-lock-open');
  } else {
    pwdInput.type = 'password';
    icon.classList.remove('fa-lock-open');
    icon.classList.add('fa-lock');
  }
}

function checkPasswordStrength(val) {
  const bar = document.getElementById('strengthBar');
  if (val.length === 0) {
    bar.style.width = '20%';
    bar.style.background = 'linear-gradient(90deg, #ff007a, #00d2ff)';
  } else if (val.length < 6) {
    bar.style.width = '35%';
    bar.style.background = '#ff007a';
  } else if (val.length < 10) {
    bar.style.width = '70%';
    bar.style.background = 'linear-gradient(90deg, #ff007a, #a855f7)';
  } else {
    bar.style.width = '100%';
    bar.style.background = 'linear-gradient(90deg, #ff007a, #a855f7, #00d2ff)';
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  toastMessage.textContent = msg;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  showToast(`Welcome, ${name}! Account created.`);
  document.getElementById('signupForm').reset();
  checkPasswordStrength('');
}

function toggleAuthMode(e) {
  e.preventDefault();
  showToast('Switched to Login view!');
}