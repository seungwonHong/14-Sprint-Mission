const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('form');

email.addEventListener('blur', () => {
    const emailValue = email.value.trim();
    const errorMessageLogin = document.querySelector('#error-message-login');
    console.log(errorMessageLogin);

    if (emailValue.includes('@')) {
        errorMessageLogin.classList.add('invisible');
        email.classList.remove('error');
    } else if (emailValue === '' || emailValue === null || emailValue === undefined) {
        errorMessageLogin.classList.remove('invisible');
        email.classList.add('error');
        errorMessageLogin.textContent = '이메일을 입력해주세요.';
    }
    else if (emailValue !== '' && !emailValue.includes('@')) {
        errorMessageLogin.classList.remove('invisible');
        email.classList.add('error');
        errorMessageLogin.textContent = '잘못된 이메일 형식입니다.'
    }
})

password.addEventListener('blur', () => {
    const passwordValue = password.value.trim();
    const errorMessagePassword = document.querySelector('#error-message-password');

    if (passwordValue.length >= 8) {
        errorMessagePassword.classList.add('invisible');
        password.classList.remove('error');
    } else if (passwordValue === '' || passwordValue === null || passwordValue === undefined) {
        password.classList.add('error');
        errorMessagePassword.classList.remove('invisible');
        errorMessagePassword.textContent = '비밀번호를 입력해주세요.';
    }
    else {
        password.classList.add('error');
        errorMessagePassword.classList.remove('invisible');
        errorMessagePassword.textContent = '비밀번호를 8자 이상 입력해주세요.';
    }
})

form.addEventListener('submit', (e) => {
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    if (!emailValue.includes('@')) {
        e.preventDefault();
    } else if (passwordValue.length < 8) {
        e.preventDefault();
    }
})