function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
    }
    return false;
}