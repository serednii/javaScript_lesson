// "use strict";


window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  function req(e) {
    e.preventDefault();

    // let body = {
    //   name: "Someone",
    //   surname: "Else",
    //   age: 26,
    //   id: Math.random()
    // }

    let formData = new FormData(form);
    formData.append("id", Math.random());

    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });

    // let json = JSON.stringify(obj);
    // console.log(formData);


    // const request = new XMLHttpRequest();
    // request.open("POST", " http://localhost:3000/people");
    // // request.open("GET", 'https://jsonplaceholder.typicode.com/posts');
    // request.setRequestHeader("Content-type", "application/json; charset=utf-8");

    // console.log(json)
    // request.send(json);
    // request.addEventListener("load", function () {

    //   if (request.status === 200) {
    //     let data = JSON.parse(request.response);
    //     console.log(data);
    //     createCards(data);
    //   } else {
    //     console.error('error');
    // }

    // });
    // console.log(this)

    // getResourse('http://localhost:3000/people', obj)
    //   .then(data => createCards(data))
    //   // .then(data => console.log(data))
    //   .catch(err => console.log(err));

    axios.post('http://localhost:3000/people', obj);
    // this.remove();
  }



  // req();
  form.addEventListener('submit', (e) => req(e), {
    "once": true
  });

  async function getResourse(url, data) {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }

  // async function getResourse(url) {
  //   const res = await axios(`${url}`);
  //   if (res.status !== 200) {
  //     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  //   }
  //   return await res;
  // }

  function createCards(data) {
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
  }



});

//json-server --watch db.json
//browser-sync start --server --files "css/*.css"