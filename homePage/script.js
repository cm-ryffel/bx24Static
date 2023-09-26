//для отображения и скрытия блока с сообщением
const techSupportLink = document.getElementById('tech-support-link');
const techSupportMessage = document.getElementById('tech-support-message');
const techSupportClose = document.getElementById('tech-support-close');

techSupportLink.addEventListener('click', function(e) {
  e.preventDefault();
  techSupportMessage.style.display = 'block';
});

techSupportClose.addEventListener('click', function() {
  techSupportMessage.style.display = 'none';
});
