// // Test example with Postman
// export const handler = (event, context, callback) => {
//   const { name } = JSON.parse(event.body);

//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({
//       msg: `Hello ${name}!`,
//     }),
//   });
// };

// -----------------------------------------------------------------------------

import axios from 'axios';

export const handler = (event, context, callback) => {
  const API_URL = 'https://api.github.com/users';
  const API_CLIENT_ID = '6e91ba0560e2f523d3d1';
  const API_CLIENT_SECRET = '6ea1b0850d49e51412cd810f5a75a9000b534b7c';
  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

  // Send user response
  const send = (body) =>
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    });

  // Perform API call
  const getUsers = () =>
    axios
      .get(URL)
      .then((res) => send(res.data))
      .catch((err) => send(err));

  // Make sure method is GET
  if (event.httpMethod == 'GET') {
    // Run
    getUsers();
  }
};
