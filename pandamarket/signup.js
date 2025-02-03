const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const nickname = document.querySelector('#nickname');
const form = document.querySelector('form');

let passwordvalue = '';
let passwordValueConfirm = '';

// 이메일 검사
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

// 비밀번호 검사
password.addEventListener('blur', () => {
    const passwordValue = password.value.trim();
    const errorMessagePassword = document.querySelector('#error-message-password');

    if (passwordValue.length >= 8) {
        errorMessagePassword.classList.add('invisible');
        password.classList.remove('error');
        passwordvalue = passwordValue;
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

// 비밀번호 확인 검사
passwordConfirm.addEventListener('blur', () => {
    const passwordConfirmValue = passwordConfirm.value.trim();
    const errorMessagePasswordConfirm = document.querySelector('#error-message-password-confirm');

    if (passwordConfirmValue.length >= 8) {
        errorMessagePasswordConfirm.classList.add('invisible');
        passwordConfirm.classList.remove('error');
        passwordValueConfirm = passwordConfirmValue;

        // 비밀번호와 확인하는 값이 같은지 확인
        if (passwordvalue !== passwordConfirmValue) {
            passwordConfirm.classList.add('error');
            errorMessagePasswordConfirm.classList.remove('invisible');
            errorMessagePasswordConfirm.textContent = '비밀번호가 일치하지 않습니다.';
        }

    } else if (passwordConfirmValue === '' || passwordConfirmValue === null || passwordConfirmValue === undefined) {
        passwordConfirm.classList.add('error');
        errorMessagePasswordConfirm.classList.remove('invisible');
        errorMessagePasswordConfirm.textContent = '비밀번호를 입력해주세요.';
    }
    else{
        passwordConfirm.classList.add('error');
        errorMessagePasswordConfirm.classList.remove('invisible');
        errorMessagePasswordConfirm.textContent = '비밀번호를 8자 이상 입력해주세요.';
    }
})

// 닉네임 검사
nickname.addEventListener('blur', () => {
    const nicknameValue = nickname.value.trim();
    const errorMessageNickname = document.querySelector('#error-message-nickname');

    if (nicknameValue === null || nicknameValue === '' || nicknameValue === undefined) {
        nickname.classList.add('error');
        errorMessageNickname.classList.remove('invisible');
        errorMessageNickname.textContent = '닉네임을 입력해주세요.';
    } else {
        nickname.classList.remove('error');
        errorMessageNickname.classList.add('invisible');
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