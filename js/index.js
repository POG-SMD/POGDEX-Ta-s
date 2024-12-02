async function gerarPokemon(num) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    const json = await response.json()
    return {
            name: json.name,
            type1: json.types[0].type.name,
            type2: json.types[1].type.name,
            sprite: json.sprites.other.showdown.front_default

        }
}


    async function setPokemonImg(){
        const card = document.getElementById('card')
        const h2 = document.getElementById('title')
        const pokemon = await gerarPokemon(1)
        h2.textContent = await pokemon.name
        card.setAttribute('src', pokemon.sprite)
  }
    setPokemonImg()
   