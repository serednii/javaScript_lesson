location.search = "mozila";
window.location.hash = "kola";
console.log(window.location.hash);
console.log(window.location.search);

const arr = [2, 5, 'kola', 'zerrol']
console.log(arr.includes('kola', ));

const arrlang = {
  "unit": {
    "rfu": "sdmslksnlfk",
    "uda": "ksdflsnsdlkfjsljdslfkjsfl",
    "en": "666666666666",
  }
}

if (arrlang["unit"]["ru"]) {
  console.log(arrlang["unit"]["ru"]);
} else {
  console.log("error")
}