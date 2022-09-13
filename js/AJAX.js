// "use strict";


window.addEventListener("DOMContentLoaded", () => {

  function req() {
    const request = new XMLHttpRequest();
    // request.open("GET", " http://localhost:3000/people");
    request.open("GET", 'https://jsonplaceholder.typicode.com/posts');
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");

    request.send();
    request.addEventListener("load", function () {

      if (request.status === 200) {
        let data = JSON.parse(request.response);
        console.log(data);
        data.forEach(element => {
          let card = document.createElement('div');
          card.classList.add('show-info__card');
          card.innerHTML = `
            <p class="show-info__user-id">${element.userId}</p>
            <p class="show-info__id">${element.id}</p>
            <p class="show-info__title">${element.title}</p>
            <p class="show-info__completed">${element.body}</p>
            `
          document.querySelector('.show-info').appendChild(card);
        });
      } else {
        console.error('error')
      }

    });
    console.log(this)
    this.remove();
  }

  // req();
  document.querySelector('.btn').addEventListener('click', req, {
    "once": true
  });






});

//json-server --watch db.json
//browser-sync start --server --files "css/*.css"