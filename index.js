// Your code goes here

function submitData(name, email) {

  // Create formData object containing name and email
  let formData = {
    name: name,
    email: email
  };
  
  // Test 1 - Send Data

  // Configuration object for fetch request
  let configObj = {
    method: "POST", // HTTP POST method
    headers: {
      "Content-Type": "application/json", // Indicates JSON content
      "Accept": "application/json" // Indicates JSON response expected
    },
    body: JSON.stringify(formData) // Converts formData to JSON string
  };

  // Initiates a POST request to http://localhost:3000/users
  return fetch("http://localhost:3000/users", configObj)
    
  // Test 2 - Handle the Response

    .then(function(response) {
      // Convert response to JSON format
      return response.json();
    })
    .then(function(object) {
      // Extract newly assigned id from response object
      let newId = object.id;
      // Update DOM with newId
      document.body.innerHTML = newId;
    })

    // Test 3 - Handle Errors

    .catch(function(error) {
      // Handle and display error message in DOM
      document.body.innerHTML = error.message;
    });
}
