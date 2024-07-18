document.addEventListener('DOMContentLoaded', function() {
    const clearIcon = document.querySelector('.clear-icon');
    const inputField = document.querySelector('.loginnumber');

    clearIcon.addEventListener('click', function() {
        inputField.value = '';
    });
});
