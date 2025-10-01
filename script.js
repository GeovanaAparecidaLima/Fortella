document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('loginForm');

    const emailInput = document.getElementById('email');

    const passwordInput = document.getElementById('password');

    const loginButton = document.querySelector('.login-button');

    const forgotLink = document.querySelector('.forgot-link');

    const registerLink = document.querySelector('.register-text');

    // Validação de email

    function isValidEmail(email) {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);

    }

    // Validação de senha

    function isValidPassword(password) {

        return password.length >= 6;

    }

    // Feedback visual para inputs

    function addInputFeedback(input, isValid) {

        if (isValid) {

            input.style.borderLeft = '4px solid #4CAF50';

            input.style.background = '#f0fff0';

        } else {

            input.style.borderLeft = '4px solid #f44336';

            input.style.background = '#fff5f5';

        }

    }

    // Remover feedback visual

    function removeInputFeedback(input) {

        input.style.borderLeft = 'none';

        input.style.background = '#f8f8f8';

    }

    // Validação em tempo real do email

    emailInput.addEventListener('input', function() {

        const email = this.value.trim();

        if (email.length > 0) {

            addInputFeedback(this, isValidEmail(email));

        } else {

            removeInputFeedback(this);

        }

    });

    // Validação em tempo real da senha

    passwordInput.addEventListener('input', function() {

        const password = this.value;

        if (password.length > 0) {

            addInputFeedback(this, isValidPassword(password));

        } else {

            removeInputFeedback(this);

        }

    });

    // Remover feedback quando o input perde o foco

    emailInput.addEventListener('blur', function() {

        if (this.value.trim() === '') {

            removeInputFeedback(this);

        }

    });

    passwordInput.addEventListener('blur', function() {

        if (this.value === '') {

            removeInputFeedback(this);

        }

    });

    // Efeito de loading no botão

    function showLoading() {

        loginButton.innerHTML = '<span style="display: inline-block; animation: spin 1s linear infinite;">⟳</span> Entrando...';

        loginButton.disabled = true;

        loginButton.style.opacity = '0.7';

    }

    function hideLoading() {

        loginButton.innerHTML = 'Entrar';

        loginButton.disabled = false;

        loginButton.style.opacity = '1';

    }

    // Submissão do formulário

    loginForm.addEventListener('submit', function(e) {

        e.preventDefault();

        const email = emailInput.value.trim();

        const password = passwordInput.value;

        // Validações

        let isFormValid = true;

        if (!email) {

            addInputFeedback(emailInput, false);

            isFormValid = false;

        } else if (!isValidEmail(email)) {

            addInputFeedback(emailInput, false);

            isFormValid = false;

        }

        if (!password) {

            addInputFeedback(passwordInput, false);

            isFormValid = false;

        } else if (!isValidPassword(password)) {

            addInputFeedback(passwordInput, false);

            isFormValid = false;

        }

        if (!isFormValid) {

            // Shake animation para erro

            loginForm.style.animation = 'shake 0.5s ease-in-out';

            setTimeout(() => {

                loginForm.style.animation = '';

            }, 500);

            return;

        }

        // Simular login

        showLoading();

        setTimeout(() => {

            hideLoading();

            // Simular sucesso/erro

            const loginSuccess = Math.random() > 0.3; // 70% chance de sucesso

            if (loginSuccess) {

                // Feedback de sucesso

                loginButton.innerHTML = '✓ Sucesso!';

                loginButton.style.background = '#4CAF50';

                setTimeout(() => {

                    alert('Login realizado com sucesso!\\nRedirecionando...');

                    // Aqui você redirecionaria para a página principal

                    // window.location.href = '/dashboard';

                }, 1000);

            } else {

                // Feedback de erro

                loginButton.innerHTML = '✗ Erro no login';

                loginButton.style.background = '#f44336';

                setTimeout(() => {

                    loginButton.innerHTML = 'Entrar';

                    loginButton.style.background = '#c85a7a';

                    alert('Email ou senha incorretos.\\nTente novamente.');

                }, 2000);

            }

        }, 2000);

    });

    // Funcionalidade dos links

    forgotLink.addEventListener('click', function(e) {

        e.preventDefault();

        alert('Funcionalidade de recuperação de senha será implementada em breve.');

    });

    registerLink.addEventListener('click', function(e) {

        e.preventDefault();

        alert('Funcionalidade de cadastro será implementada em breve.');

    });

    // Efeitos de hover aprimorados

    loginButton.addEventListener('mouseenter', function() {

        if (!this.disabled) {

            this.style.transform = 'translateY(-2px)';

            this.style.boxShadow = '0 8px 25px rgba(200, 90, 122, 0.4)';

        }

    });

    loginButton.addEventListener('mouseleave', function() {

        if (!this.disabled) {

            this.style.transform = 'translateY(0)';

            this.style.boxShadow = 'none';

        }

    });

    // Animação de entrada dos elementos

    setTimeout(() => {

        document.querySelector('.logo-section').style.opacity = '1';

        document.querySelector('.logo-section').style.transform = 'translateY(0)';

    }, 200);

    setTimeout(() => {

        document.querySelector('.login-form').style.opacity = '1';

        document.querySelector('.login-form').style.transform = 'translateY(0)';

    }, 400);

});

// CSS adicional para animações via JavaScript

const style = document.createElement('style');

style.textContent = `

    @keyframes spin {

        0% { transform: rotate(0deg); }

        100% { transform: rotate(360deg); }

    }

    @keyframes shake {

        0%, 100% { transform: translateX(0); }

        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }

        20%, 40%, 60%, 80% { transform: translateX(5px); }

    }

    .logo-section {

        opacity: 0;

        transform: translateY(-20px);

        transition: all 0.6s ease-out;

    }

    .login-form {

        opacity: 0;

        transform: translateY(20px);

        transition: all 0.6s ease-out;

    }

`;

document.head.appendChild(style);
 