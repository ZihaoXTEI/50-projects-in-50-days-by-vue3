const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

export const getMovies = async (searchText) => {
  let url = ''
  if (!searchText) {
    url = API_URL
  } else {
    url = SEARCH_API + searchText
  }

  const res = await fetch(url)
  const { reuslt } = await res.json()

  const movies = []

  reuslt.forEach((item) => {
    const { title, poster_path, vote_average, overview } = item

    const image_url = IMG_PATH + poster_path
    const span_classname = getClassByRate(vote_average)

    movies.push({ title, image_url, vote_average, overview, span_classname })
  })
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}
