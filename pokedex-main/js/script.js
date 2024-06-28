const pokemonName = document.querySelector(".pokemon_name")
const pokemonNumber = document.querySelector(".pokemon_number")
const pokemonImage = document.querySelector(".pokemon_image")
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");
let contadora;

// conectar com API
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;

    }

};

//rendenizar os dados da API

const renderPokemon = async (pokemon) => {

    // input.value = "";
    pokemonNumber.textContent = "";
    pokemonName.textContent = "Carregando..."
    pokemonNumber.textContent = "!"
    pokemonImage.src = "https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif"

    const data = await fetchPokemon(pokemon)

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = "https://png.pngtree.com/png-vector/20210219/ourmid/pngtree-colorful-neon-glitch-404-text-png-image_2928701.jpg"

        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        contadora = data.id;
    } else {
        pokemonName.textContent = "Não encontrado"
    }
    console.log(data)
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener("click", () => {
    
    if(contadora> 1) {
        contadora -=1;
    renderPokemon(contadora)
    }
});




buttonNext.addEventListener("click", () => {
    contadora += 1;
    renderPokemon(contadora)
});

renderPokemon(1)
