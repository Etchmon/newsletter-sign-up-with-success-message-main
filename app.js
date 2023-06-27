const Validator = (() => {
    const form = document.getElementById('form');
    const success = document.getElementById('success');
    const card = document.getElementById('card');

    const isEmailValid = (email) => {
        // Email pattern for basic validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = form.elements.email;
        const emailValue = form.elements.email.value.trim();
        const errorMsg = document.getElementById('error');

        // Perform validations
        if (!isEmailValid(emailValue)) {
            console.log('Failed to submit')
            errorMsg.style.display = 'block';
            email.classList.add('invalid');
            return;
        }

        email.classList.remove('invalid');
        errorMsg.style.display = 'none';
        success.style.top = '0';
        card.style.display = 'none';

        console.log('Success!');


        form.reset();
    });

    success.addEventListener('click', function (e) {
        e.preventDefault();
        card.style.display = 'grid';

        success.style.top = '-200%';
    });
})();