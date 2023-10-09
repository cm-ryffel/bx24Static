
try {
  const navItems = document.querySelectorAll('.nav-item');
  const menuContents = document.querySelectorAll('.menu-content');
  const burgerNavButton = document.querySelector('.navbar-toggler');

  menuContents.forEach(content => {
    if (content.id !== 'tasks') {
      content.style.display = 'none';
    }
  });

  navItems.forEach((item, index) => {
    if (!item.classList.contains('user-pic')) {
      item.addEventListener('click', () => {
        menuContents.forEach(content => content.style.display = 'none');
        menuContents[index].style.display = 'block';
      });
    }
  });

  burgerNavButton.addEventListener('click', () => {
    const targetId = burgerNavButton.getAttribute('data-bs-target');
    const targetMenu = document.querySelector(targetId);
    const targetNavItems = targetMenu.querySelectorAll('.nav-elem');

    targetNavItems.forEach((item, index) => {
      if (!item.classList.contains('user-pic')) {
        item.addEventListener('click', () => {
          menuContents.forEach(content => content.style.display = 'none');
          menuContents[index].style.display = 'block';
          burgerNavButton.click();
        });
      }
    });
  });
} catch (error) {
  console.error(`Ошибка: ${error.message}`);
}


fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((json) => {
      const taskList = document.querySelector('.task-list');
      json.forEach(task => {
        const taskElem = document.createElement('div');
        taskElem.classList.add('task-elem');
        const taskTitle = document.createElement('h2');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = `Название: ${task.title}`;
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = `Затраченное время: ${task.id} hours`;
        const deadline = document.createElement('p');
        deadline.classList.add('deadline');
        deadline.textContent = `Крайний срок: ${task.completed ? 'Today' : 'Next Week'}`;
        const status = document.createElement('p');
        status.classList.add('status');
        status.textContent = `Статус: ${task.completed ? 'Completed' : 'Not Started'}`;
        taskElem.appendChild(taskTitle);
        taskElem.appendChild(time);
        taskElem.appendChild(deadline);
        taskElem.appendChild(status);
        taskList.appendChild(taskElem);
      });
    });
  
