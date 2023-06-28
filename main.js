const display = document.getElementById("show");
const next = document.getElementById("next");

function showDisplay(text){
    display.textContent = text;
}

/*next.onclick = function(){
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
};*/

next.onclick = async function(){
    try{   
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await res.json();
        showDisplay(await data.value);
    }catch(error){
        console.error(error);
    }
};
