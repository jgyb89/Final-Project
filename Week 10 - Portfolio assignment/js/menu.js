// Replace <your-api-key> with your actual API key
const apiKey = "1c9eba53d73d107f1da8ca54692b2d02";

// Replace <your-token> with your actual session token
const sessionToken = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqYW1lc2dyZWVuIiwiaXNzIjoiaWN0NDUxMC5kdS5lZHUiLCJpYXQiOjE2OTI0Nzk3MDcsImV4cCI6MTY5MjUwODUwN30.S619NIXXo2OoTeFpP9vRwcM8hN2mw09ZKXx4cY___Jtq_1ILKykSoDH1nj0agne9U3dKxxtqVMfiB79QQl2j0w";

// Data to send in the request body
const requestData = {
  item: "Your Item Name",
  description: "Your Item Description",
  price: 19.99
};

// Endpoint URL
const endpointURL = `https://ict4510.herokuapp.com/api/menus?api_key=${apiKey}`;

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure the request
xhr.open("POST", endpointURL, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-access-token", sessionToken);

// Define a callback function to handle the response
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 201) {
      console.log("Request successful - HTTP 201 Created");
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  }
};

// Convert data to JSON format and send the request
xhr.send(JSON.stringify(requestData));
