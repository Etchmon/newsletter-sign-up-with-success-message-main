const Validator = (() => {
    const form = document.getElementById('form');

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

        console.log(errorMsg);

        // Perform validations
        if (!isEmailValid(emailValue)) {
            console.log('Failed to submit')
            errorMsg.style.display = 'block';
            email.classList.add('invalid');
            return;
        }

        email.classList.remove('invalid');
        errorMsg.style.display = 'none';
        console.log('Success!');


        form.reset();
    })
})();