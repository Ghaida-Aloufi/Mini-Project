
let btn=document.getElementById("btn")
btn.addEventListener("click", ()=> {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
 



  if (username.value.length >= 5 && password.value.length >= 8 ) {
    fetch('https://66e7e69bb17821a9d9da6eab.mockapi.io/login-page', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
       
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
  } else {

    alert("Please make sure all fields are filled correctly:\n- Username must be at least 5 characters\n- Password must be at least 8 characters\n- A valid email is required\n- Age must be a positive number");
  }
});