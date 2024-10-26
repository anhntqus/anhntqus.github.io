document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').innerHTML = `<p class="text-success">Cảm ơn bạn, ${name}. Chúng tôi sẽ liên lạc qua email ${email} sớm nhất có thể!</p>`;
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').innerHTML = '<p class="text-danger">Vui lòng điền đầy đủ thông tin!</p>';
    }
});
