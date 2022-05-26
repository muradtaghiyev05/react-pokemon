import React from 'react'

function PokemonList({pokemons}) {

    return (
    <div>
        {pokemons.map((pokemon) => (
            <h1 key={parseInt(pokemon.url.slice(-3, -1)) ? pokemon.url.slice(-3, -1) : pokemon.url.slice(-2, -1)}>{pokemon.name}</h1>
        ))}
    </div>
    )
}

export default PokemonList