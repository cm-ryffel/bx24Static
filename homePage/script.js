const techSupportLink = document.getElementById('tech-support-link');
const techSupportMessage = document.getElementById('tech-support-message');
const techSupportClose = document.getElementById('tech-support-close');

// Проверяем, есть ли сохраненное состояние окна
const isMessageVisible = localStorage.getItem('messageVisible');

if (isMessageVisible === 'true') {
  techSupportMessage.style.display = 'block';
} else {
  techSupportMessage.style.display = 'none';
}

techSupportLink.addEventListener('click', function(event) {
  event.preventDefault();
  techSupportMessage.style.display = 'block';
  localStorage.setItem('messageVisible', 'true');
});

techSupportClose.addEventListener('click', function() {
  techSupportMessage.style.display = 'none';
  localStorage.removeItem('messageVisible');
});
