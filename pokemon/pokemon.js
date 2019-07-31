$(document).ready(function() {
  showData("https://pokeapi.co/api/v2/pokemon/?limit=12");
});

function showData(data) {
  // $(".spinner-border").show();
  $.getJSON(data, function(pokemon) {
    let pika = "";
    // console.log(pokemon);
    pokemon.results.forEach(pikachu => {
      const { name, url } = pikachu;
      let id = url
        .replace("https://pokeapi.co/api/v2/pokemon/", "")
        .replace("/", "");
      console.log(id);

      // pika += `<div class="col-6 col-md-4 col-lg-3">
      // <div>
      //  <a href="poke.html?id=${id}">
      //     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name}">
      //  </a>
      // </div>
      // </div>`;
      pika += `
            <div class="col-6 col-md-4 col-lg-3 p-2">
        <figure class="bg-light rounded border border-primary">

            <a href="poke.html?id=${id}">
            <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" 
            alt="${name}" />
            </a>
        </figure>

            <div class="text-center">${id}</div>
            <div class="text-center">${name}</div>
                </div>
            `;
    });
    $(".row").html(pika);
  }).done(function() {
    console.log("second success");
    $(".spinner-border").hide();
  });
}
