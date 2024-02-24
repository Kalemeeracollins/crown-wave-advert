document.getElementById('contact-form').addEventListener('submit', function(event) {
    var isValid = true;
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var image = document.getElementById('image').value.trim();
    var message = document.getElementById('message').value.trim();
    var usernameError = document.getElementById('username-error');
    var emailError = document.getElementById('email-error');
    var imageError = document.getElementById('image-error');
    var messageError = document.getElementById('message-error');
    var notification = document.getElementById('notification');
    var warning = document.getElementById('warning');

    // Reset previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    imageError.textContent = '';
    messageError.textContent = '';
    warning.textContent = '';

    if (username === '') {
      isValid = false;
      usernameError.textContent = 'Please enter your username.';
    }

    if (email === '') {
      isValid = false;
      emailError.textContent = 'Please enter your email address.';
    } else if (!isValidEmail(email)) {
      isValid = false;
      emailError.textContent = 'Please enter a valid email address.';
    }

    if (image === '') {
      isValid = false;
      imageError.textContent = 'Please upload an image.';
    }

    if (message === '') {
      isValid = false;
      messageError.textContent = 'Please enter your message.';
    }

    if (!isValid) {
      event.preventDefault();
      warning.textContent = 'Message not sent! Please fill out all fields correctly.';
      warning.style.display = 'block';
    } else {
      notification.textContent = 'Message sent!';
      notification.style.display = 'block';
      setTimeout(function() {
        notification.style.display = 'none';
      }, 5000);
    }
  });

  function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }