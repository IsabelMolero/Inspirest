import './search.css'

// PETICIÓN
import { searchPhotos } from '../../utils/Unsplash'
import { CARD } from '../CARD/card'

let RESPONSE
// CREAR BUSCADOR
export const createSearch = (placeholder) => {
  const formSearch = document.createElement('form')
  formSearch.classList.add('searchForm')

  const inputSearch = document.createElement('input')
  inputSearch.type = 'search'
  inputSearch.classList.add('searchinput')
  inputSearch.placeholder = `${placeholder}`

  formSearch.appendChild(inputSearch)

  // LOGICA DE BUSQUEDA
  formSearch.addEventListener('submit', async (e) => {
    e.preventDefault() // Previene el refresh de la página
    const query = inputSearch.value.trim() || 'cat'

    try {
      const results = await searchPhotos(query)
      // console.log(results)
      const photos = results?.response?.results
      // if (photos) {
      //   RESPONSE = photos
      // }
      console.log(photos)
      if (photos) {
        const ul = document.querySelector('.grid-cards')
        ul.innerHTML = ''
        photos.forEach((photo) => {
          const urlImg = photo.urls.regular
          const altDescription = photo.alt_description || 'Imagen de Unsplash'
          const urlImgUser = photo.user.profile_image?.medium
          const urlImgAltUser = `Foto de ${photo.user.name}`
          const nameUser = photo.user.name
          const dateUpload = new Date(photo.updated_at).toLocaleDateString()

          CARD(
            urlImg,
            altDescription,
            urlImgUser,
            urlImgAltUser,
            nameUser,
            dateUpload
          )
        })
      }
    } catch (error) {
      console.log('Error al buscar imágenes', error)
    }
    inputSearch.value = ''
  })

  return formSearch
}
