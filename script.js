const inputBox = document.getElementById('inputBox');
const message = document.getElementById('message');

inputBox.addEventListener('input', () => {
  message.textContent = inputBox.value || "Hello World";
});