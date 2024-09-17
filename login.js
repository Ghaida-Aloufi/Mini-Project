let pass = document.getElementById("pass");
let username = document.getElementById("username");
let btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (username.value.length < 5) {
    alert("Username must be at least 5 characters.");
    return;
  }

  if (pass.value.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  fetch('https://66e7e69bb17821a9d9da6eab.mockapi.io/login-page', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      pass: pass.value
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      if (json.success || json.username === username.value) {
        localStorage.setItem('username', username.value);
        window.location.href = "index.html";
      } else {
        alert("Login failed. Please check your username and password.");
      }
    })

});