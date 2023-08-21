document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const foodMenuForm = document.getElementById('foodMenuForm');
  const menuList = document.getElementById('menuList');
  const menuForm = document.getElementById('menuForm');
  const menuItemsList = document.getElementById('menuItems');
  const logoutBtn = document.getElementById('logoutBtn');

  loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('https://ict4510.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.status === 200) {
        const data = await response.json();
        sessionStorage.setItem('user', JSON.stringify(data.user));

        loginForm.classList.add('d-none');
        foodMenuForm.classList.remove('d-none');
        menuList.classList.remove('d-none');
        hideLoginHeader(); // Hide the "Login" header
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

  menuForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const item = document.getElementById('item').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const user = JSON.parse(sessionStorage.getItem('user'));

    try {
      const response = await fetch('https://ict4510.herokuapp.com/api/menus?api_key=1c9eba53d73d107f1da8ca54692b2d02', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': user.token
        },
        body: JSON.stringify({ item, description, price })
      });

      if (response.status === 201) {
        const menuItem = {
          item: item,
          description: description,
          price: price
        };
        displayMenuItem(menuItem);
        saveMenuItemToSessionStorage(menuItem);
        menuForm.reset();
      } else {
        console.log('Failed to add item to the menu');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

  logoutBtn.addEventListener('click', function () {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('menuItems');
    menuItemsList.innerHTML = '';
    foodMenuForm.classList.add('d-none');
    menuList.classList.add('d-none');
    loginForm.classList.remove('d-none');
  });

  function displayMenuItem(menuItem) {
    const li = document.createElement('li');
    li.textContent = `${menuItem.item} - ${menuItem.description} - $${menuItem.price}`;
    menuItemsList.appendChild(li);
  }

  function saveMenuItemToSessionStorage(menuItem) {
    const existingMenuItems = JSON.parse(sessionStorage.getItem('menuItems')) || [];
    existingMenuItems.push(menuItem);
    sessionStorage.setItem('menuItems', JSON.stringify(existingMenuItems));
  }

  const savedMenuItems = JSON.parse(sessionStorage.getItem('menuItems'));
  if (savedMenuItems) {
    savedMenuItems.forEach(item => displayMenuItem(item));
  }

  function hideLoginHeader() {
    const loginHeader = document.querySelector('#loginForm h2');
    loginHeader.style.display = 'none';
  }
});