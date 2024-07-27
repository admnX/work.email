function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('Please enter your name');
        return false;
    }

    if (email.trim() === '') {
        alert('Please enter your email address');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (message.trim() === '') {
        alert('Please enter a message');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
