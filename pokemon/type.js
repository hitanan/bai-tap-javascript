var params = new URLSearchParams(window.location.search);
$(document).ready(function() {
    showData(`https://pokeapi.co/api/v2/type/${params.get("type")}/`);
});

function showData(url) {
    // $(".spinner-border").show();
    $.getJSON(url, function(data) {
        let pika = "";
        data.pokemon.forEach(item => {
            const { name, url } = item.pokemon;
            let id = url
                .replace("https://pokeapi.co/api/v2/pokemon/", "")
                .replace("/", "");
            console.log(id);
            pika += `
            <div class="card card col-6 col-md-4 col-lg-3">
            <a href="poke.html?id=${id}">
            <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" 
            alt="${name}" />
            </a>
            <div class="card-body">
            <div class="text-center">${id}</div>
            <div class="text-center">${name}</div>
                </div>
                </div>
            `;
        });
        $(".row").html(pika);
    }).done(function() {
        console.log("second success");
        $(".spinner-border").hide();
    });
}
