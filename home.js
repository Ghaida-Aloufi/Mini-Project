let url = "https://66e7e69bb17821a9d9da6eab.mockapi.io/login-page";
let div = document.getElementById("div");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((e) => {
      let r = document.createElement("div");
      r.classList.add("article-card");

      if (e.image) {
        let image = document.createElement("img");
        image.src = e.image;
        image.style.width = "100%";
        image.style.height = "200px";  
        image.style.objectFit = "cover";  
        r.appendChild(image);
      }

      let title = document.createElement("h2");
      title.textContent = e.title;

      let content = document.createElement("p");
      content.textContent = e.content;

      r.appendChild(title);
      r.appendChild(content);

      div.appendChild(r);
    });
  })
