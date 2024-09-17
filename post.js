let btn=document.getElementById("btn")
let title=document.getElementById("title")
let content=document.getElementById("content")
let image=document.getElementById("image")




btn.addEventListener("click", ()=> {


fetch('https://66e7e69bb17821a9d9da6eab.mockapi.io/login-page', {
  method: 'POST',
  body: JSON.stringify({
    Articletitle: title.value ,
    content:content.value,
    image:image.value
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => 
  console.log(json));

  alert("Article posted successfully!");




});

