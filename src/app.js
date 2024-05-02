const users = document.getElementById('users');

const getUsers = async () => {
  let users;
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      mode: 'cors',
      credentials: 'same-origin',
    });
    users = await res.json();
    return users;
  } catch (error) {
    console.log(error);
  }
  return users;
};

const randomPhoto = (url) => url;

const renderApp = async () => {
  const div = document.createElement('div');
  const userLists = await getUsers();
  let render = '';
  userLists.map((user) => {
    render += `
    <div class='user'>
        <picture>
            <img src=${randomPhoto(
              'https://source.unsplash.com/random/300×300/?profile'
            )} alt=${user.username} />
        </picture>
        <p class="user_name text-red-700">👤 ${user.username}</p>
        <h2>${user.name}</h2>
        <p>${user.company.catchPhrase}</p>
        <ul>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt text-gray-800" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>
            ${user.company.name}
            </li>
            <li>🏠 ${user.address.city}</li>
            <li class="flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
            ${user.email}
            </li>
        </ul>
    </div>
`;
    return render;
  });
  div.className = 'container';
  div.innerHTML = render;
  users.append(div);
};
renderApp();
