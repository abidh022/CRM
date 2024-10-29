let accounts = {};
let currentAccount = null;
let isFormVisible = false; 

function showAccountForm() {
    const accountForm = document.querySelector('.forcreatingnew');
    if (accountForm) {
        if (isFormVisible) {
            accountForm.classList.add('hidden');
        } else {
            accountForm.classList.remove('hidden');
        }
        isFormVisible = !isFormVisible;
    } else {
        console.error("Element '.forcreatingnew' not found!");
    }
}
    

document.getElementById('saveAccountBtn').onclick = function () {
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('cnfmpassword').value;

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    if (!isValidPass(password)) {
        alert("Please enter a valid Password.");
        return;
    }
    if (accounts[email]) {
        alert('Email already exists.');
        return;
    }
    accounts[email] = {
        holderName: `${firstName} ${lastName}`,
        balance: 0,
        password: password
    };

    alert("Account created successfully");
    document.querySelector('.forcreatingnew').classList.add('hidden');
};

document.getElementById('loginBtn').onclick = function () {
    const email = document.getElementById('loginemail').value;
    const password = document.getElementById('loginpassword').value;

    if (accounts[email] && accounts[email].password === password) {
        currentAccount = accounts[email];
        document.getElementById('accountInfo').innerHTML = `Hello ${currentAccount.holderName}, Your Balance: $${currentAccount.balance}`;
        document.getElementById('accountInfo').classList.remove('hidden');
        document.querySelector('.transaction-buttons').classList.remove('hidden');
        document.getElementById('loginemail').value = '';
        document.getElementById('loginpassword').value = '';
        document.querySelector('.container').classList.add('hidden');
        document.getElementById('forgotPasswordLink').classList.add('hidden');



    } else {
        alert("Invalid email or password.");
    }
};

document.getElementById('logoutBtn').onclick = function () {
    currentAccount = null;
    document.getElementById('accountInfo').classList.add('hidden');
    document.querySelector('.transaction-buttons').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');

    alert("You have logged out.");
};

function handleTransaction(type) {
    const amount = parseFloat(document.getElementById('transactionAmount').value);
    if (!isNaN(amount) && amount > 0) {
        if (type === 'deposit') {
            currentAccount.balance += amount;
        } else if (type === 'withdraw') {
            if (amount > currentAccount.balance) {
                alert("Insufficient balance.");
                return;
            }
            currentAccount.balance -= amount;
        }
        document.getElementById('accountInfo').innerHTML = `Hello ${currentAccount.holderName}, Your Balance: $${currentAccount.balance}`;
        document.getElementById('transactionAmount').value = '';
        document.querySelector('.transaction-input').classList.add('hidden');
    } else {
        alert("Please enter a valid amount.");
    }
}

document.getElementById('depositBtn').onclick = function () {
    document.querySelector('.transaction-input').classList.remove('hidden');
    document.getElementById('confirmTransactionBtn').onclick = function () {
        handleTransaction('deposit');
    };
};

document.getElementById('withdrawBtn').onclick = function () {
    document.querySelector('.transaction-input').classList.remove('hidden');
    document.getElementById('confirmTransactionBtn').onclick = function () {
        handleTransaction('withdraw');
    };
};

document.getElementById('checkBalanceBtn').onclick = function () {
    alert(`Your account balance: $${currentAccount.balance}`);
};

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidPass(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

function toggleVisibility() {
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('toggleButton');
    
    passwordInput.type = checkbox.checked ? 'text' : 'password';
}
document.getElementById('toggleButton').addEventListener('click', toggleVisibility);

document.getElementById('forgotPasswordLink').onclick = function (event) {
    event.preventDefault();
  document.querySelector('.forgot-password-form').classList.remove('hidden');
  document.querySelector('.forgot-password-form').classList.remove('hidden');

};

document.getElementById('resetPasswordBtn').onclick = function () {
    const email = document.getElementById('forgotEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;

    if (!accounts[email]) {
        alert("Email not found.");
        return;
    }

    if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (!isValidPass(newPassword)) {
        alert("Password is not strong enough.");
        return;
    }

    accounts[email].password = newPassword;

    document.querySelector('.forgot-password-form').classList.add('hidden');
    alert("Password reset successfully. You can now log in with your new password.");
};

document.getElementById('cancelResetBtn').onclick = function () {
    document.querySelector('.forgot-password-form').classList.add('hidden');
};
