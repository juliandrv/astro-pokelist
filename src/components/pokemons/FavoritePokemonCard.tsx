import type { FavoritePokemon } from "@interfaces/favorite-pokemon"
import { Show, createSignal, type Component } from "solid-js"

interface Props {
  pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {
  const [isVisible, setIsVisible] = createSignal(true)

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  const deleteFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[]
    const newFavorites = favorites.filter((favorite) => favorite.id !== pokemon.id)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    setIsVisible(false)
  }

  return (
    <Show when={isVisible()}>
    <div class="card text-center bg-base-100 shadow-xl rounded-lg">
      <a href={`/pokemons/${pokemon.name}`} class="p-4">
        <figure><img src={imageSrc} alt={pokemon.name} style={`view-transition-name: ${pokemon.name}-image`} /></figure>
        <h2 class="text-lg capitalize font-semibold">#{pokemon.id} - {pokemon.name}</h2>
      </a>
      <button onClick={deleteFavorite} class="btn text-red-400 my-4">Delete</button>
    </div>
    </Show>
  )
}