// function myFync(callBack) {
//   const a = [4, 5, 6];
//   let element = document.querySelector('.show-info');
//   callBack(element, a)
// }

// function out(elem, arr) {
//   elem.innerHTML = arr.join('***')
// }

// myFync(out);

function getTitle(callBack, callBack1) {
  fetch('http://localhost:3000/people')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callBack(data);
      callBack1(data);
    });
}

function showTitle(obj) {
  obj.forEach(e => {
    console.log(e.title);
  });
}

function showBody(obj) {


  obj.forEach(e => {
    if (e.title) {
      // let p = `<p class="show-info__user-id">${e.title}</p>`
      document.querySelector('.show-info').innerHTML += `<p class="show-info__user-id">${e.title}</p>`;
    }

  });
}

getTitle(showTitle, showBody)