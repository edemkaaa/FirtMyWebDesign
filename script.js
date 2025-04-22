document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        
        // Валидация email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Пожалуйста, введите корректный email адрес');
            return;
        }
        
        // Вывод данных в консоль
        console.log('Введенные данные:');
        console.log('Имя:', nameInput.value);
        console.log('Email:', emailInput.value);
        
        // Отображение сообщения на странице
        messageDiv.textContent = `Спасибо за вашу информацию, ${nameInput.value}!`;
        messageDiv.classList.add('success');
        
        form.reset();
    });
});