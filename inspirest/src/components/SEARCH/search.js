import './search.css'

// PETICIÓN
import { searchPhotos } from '../../utils/Unsplash'
let resultsPhotos = await searchPhotos('cat')
console.log(resultsPhotos)

let wordToSearch

// CREAR BUSCADOR
export const createSearch = (placeholder) => {
  const formSearch = document.createElement('form')
  formSearch.classList.add('searchForm')

  const inputSearch = document.createElement('input')
  inputSearch.type = 'search'
  inputSearch.classList.add('searchinput')
  inputSearch.placeholder = `${placeholder}`

  formSearch.appendChild(inputSearch)

  return formSearch
}

//RECOGER VALOR INPUT

// formSearch.addEventListener('submit', (e) => {
//   e.preventDefault() // Previene el refresh de la página
//   const textSearch = inputSearch.value.trim()
//   if (textSearch) {
//     wordToSearch = textSearch
//     console.log(wordToSearch)
//     wordToSearch = textSearch
//     console.log(wordToSearch)
//   }
// })
