const display = document.getElementById("show");
const next = document.getElementById("next");

let url = 'https://api.chucknorris.io/jokes/random';


function showDisplay(text){
    console.log(text);
    display.textContent = text;
}

next.onclick = function(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error en la solicitud de la API');
      }
    })
    .then(json => {
      console.log(json.value);
      showDisplay(json.value);
    })
    .catch(error => {
      console.error(error);
    });
};