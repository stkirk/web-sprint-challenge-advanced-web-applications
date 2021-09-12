# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.
   A token is used as proof sent from the server that the user has submitted some credentials that allow them to access some specific protected route/data.

2. What steps can you take in your web apps to keep your data secure?
   1 - Protect certain paths that render components with sensitive data with PrivateRoutes that require some sort of authentication token from the server.
   2 - On the server side, only respond with sensitive data when the client side requests it with some specific credentials.

3. Describe how web servers work.
   Servers receive HTTP requests from clients and respond with appropriate data for the purpose of running the client's web application.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
   Create: POST - sends a payload to the server to be added to some endpoint's data
   Read: GET - makes a request to the server to send back some data
   Update: PUT - makes a request to the server to replace specific data it has with a payload it is sending
   Delete: DELETE - makes a request to the server to remove some specific data
