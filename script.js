const validCredentials = {
    username: "sampleuser",
    password: "user@1234"
};

if (window.location.pathname.includes('loading.html')) {
    setTimeout(() => {
        window.location.href = 'signin.html';
    }, 3000);
}

document.getElementById('login-button')?.addEventListener('click', () => {
    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;

    if (username === validCredentials.username && password === validCredentials.password) {
        window.location.href = 'home.html';
    } else {
        alert('Please enter a valid username and password.');
    }
});

document.getElementById('register-button')?.addEventListener('click', () => {
    window.location.href = 'register.html';
});

document.getElementById('submit-button')?.addEventListener('click', () => {
    const regUsername = document.getElementById('reg-username')?.value;
    const phone = document.getElementById('phone')?.value;
    const email = document.getElementById('email')?.value;
    const regPassword = document.getElementById('reg-password')?.value;

    if (!regUsername) {
        alert('Please enter a username.');
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }
    if (regPassword.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    alert('Registration successful! You can now log in.');
    window.location.href = 'signin.html'; 
});

function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    dateTimeElement.innerText = now.toLocaleString();
  }
  
  setInterval(updateDateTime, 1000);
  
  function viewTimetable() {
    window.location.href = 'timetable.html';
  }

  function logout() {
    window.location.href = 'signin.html';
  }
  
  function confirmBooking() {
    alert('Booking confirmed! Redirecting to the bill page.');
    window.location.href = 'bill.html';
  }
