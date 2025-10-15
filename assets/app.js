const emailInput = document.querySelector('#email');
const dismissBtn = document.querySelector('.success-page button');
const successPage = document.querySelector('.success-page');
const mainPage = document.querySelector('main');
const emailErrorDisplay = document.querySelector('.email-error');

emailInput.focus();

document.querySelector('form').addEventListener('submit', (e) => e.preventDefault());

document.querySelector('[type="submit"]').addEventListener('click', () => {
    const email = emailInput.value.trim();

    if (email === '' || !isValidEmail(email)) {
        showEmailError();

        return;
    }

    hideMainPage();

    showSuccessPage(email);
});

dismissBtn.addEventListener('click', () => {
    successPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
    emailInput.focus();
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

function hideMainPage() {
    mainPage.classList.add('hidden');
    emailErrorDisplay.classList.add('hidden');
    emailInput.classList.remove('input-error');
    emailInput.value = '';
}

function showSuccessPage(email) {
    successPage.querySelector('#success-email').textContent = email;
    successPage.classList.remove('hidden');
}

function showEmailError() {
    emailErrorDisplay.classList.remove('hidden');
    emailInput.classList.add('input-error');
}