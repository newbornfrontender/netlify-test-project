const fetchUsers = async () =>
  await (await fetch('/.netlify/functions/get-users')).json();

fetchUsers().then((data) => {
  const userList = document.querySelector('#users');

  data.forEach(({ login, html_url }) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';

    const link = document.createElement('a');
    link.appendChild(document.createTextNode(login));
    link.href = html_url;
    link.target = '_blank';

    li.appendChild(link);

    userList.appendChild(li);
  });
});
