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
  const { API_URL, API_CLIENT_ID, API_CLIENT_SECRET } = process.env;

  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

  // Send user response
  const send = (body) =>
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify(body),
    });

  // Perform API call
  const getUsers = () =>
    axios
      .get(URL)
      .then(({ data }) => send(data))
      .catch((err) => send(err));

  // Make sure method is GET
  if (event.httpMethod == 'GET') {
    // Run
    getUsers();
  }
};
