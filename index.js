// Your code goes here

function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

    // Test 1 - Send Data
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    
  // Test 2 - Handle the Response

    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let newId = object.id;
      document.body.innerHTML = newId;
    })

    // Test 3 - Handle Errors

    .catch(function(error) {
      document.body.innerHTML = error.message;
    });
}

