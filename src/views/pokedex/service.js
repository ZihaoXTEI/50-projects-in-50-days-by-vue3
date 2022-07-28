// const POKEMON_COUNT = 150
const COLORS = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const getPokeMon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getAllPokeMonData = async () => {
  const pokenMonList = []

  const mainTypes = Object.keys(COLORS)

  for (let i = 1; i < 50; i++) {
    const pokemon = await getPokeMon(i)
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const pokeTypes = pokemon.types.map((type) => type.type.name)
    const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1)
    const color = COLORS[type]
    const imageUrl = pokemon.sprites.front_default

    if (i === 1) {
      console.log(pokemon)
    }

    pokenMonList.push({ id, name, type, color, imageUrl })
  }

  console.log(pokenMonList)
  return pokenMonList
}
