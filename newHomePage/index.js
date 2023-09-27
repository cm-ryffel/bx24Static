try {
  const navItems = document.querySelectorAll('.nav-elem');
  const menuContents = document.querySelectorAll('.menu-content');
  const burgerNavButton = document.querySelector('.navbar-toggler');

  // Скрываем все элементы, кроме #tasks
  menuContents.forEach(content => {
    if (content.id !== 'tasks') {
      content.style.display = 'none';
    }
  });

  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      menuContents.forEach(content => content.style.display = 'none');
      menuContents[index].style.display = 'block';
    });
  });

  burgerNavButton.addEventListener('click', () => {
    const targetId = burgerNavButton.getAttribute('data-bs-target');
    const targetMenu = document.querySelector(targetId);
    const targetNavItems = targetMenu.querySelectorAll('.nav-elem');

    targetNavItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        menuContents.forEach(content => content.style.display = 'none');
        menuContents[index].style.display = 'block';
        burgerNavButton.click();
      });
    });
  });
} catch (error) {
  console.error(`Ошибка: ${error.message}`);
}
