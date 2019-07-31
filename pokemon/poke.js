var params = new URLSearchParams(window.location.search);
$(document).ready(function() {
    $.getJSON(
        `https://pokeapi.co/api/v2/pokemon/${params.get("id")}/`,
        function(data) {
            let poki = "";
            const {
                name,
                abilities,
                types,
                stats,
                height,
                weight,
                id,
                moves
            } = data;
            // console.log(types);
            $("#no").html(id.toString().padStart(3, "0"));
            let type = "";
            types.forEach(item => {
                // console.log(item.type.name);
                let classType = getClass(item.type.name);
                console.log(classType);
                type += `<a href="type.html?type=${
                    item.type.name
                }"class="${classType}" >${item.type.name}</a>`;
            });
            let total = 0;
            stats.forEach(item => {
                total += item.base_stat;
            });

            console.log(moves);

            let ablString = "";
            abilities.forEach(item => {
                // console.log(item.abilities.name);
                if (item.is_hidden) {
                    ablString += `<div>${
                        item.ability.name
                    } (hidden ability)</div>`;
                } else {
                    ablString += `<div>${item.ability.name}</div>`;
                }
            });
            $("#speed").html(stats[0].base_stat);
            $("#spDef").html(stats[1].base_stat);
            $("#spAtk").html(stats[2].base_stat);
            $("#def").html(stats[3].base_stat);
            $("#att").html(stats[4].base_stat);
            $("#hp").html(stats[5].base_stat);
            $("#total").html(total);
            $("#abl").html(ablString);
            $("#type").html(type);
            $("img").attr(
                "src",
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            );
            $("#pokename").text(name);
            $("body").append(poki);
            $("#weight").html(weight);
            $("#height").html(height);
            console.log(data);
        }
    );
});

function getClass(type) {
    if (type == "grass") {
        return "btn btn-success";
    }
    if (type == "fire") {
        return "btn btn-danger";
    }
    if (type == "flying") {
        return "btn btn-info";
    }
    return "btn btn-light";
}
