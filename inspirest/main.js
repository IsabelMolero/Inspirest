import './style.css'

// //PETICION // --- en SEARCH.JS

//HEADER//
import './src/components/HEADER/header'

//BUSCADOR
import { createSearch } from './src/components/SEARCH/search'
createSearch()

import { searchPhotos } from './src/utils/Unsplash'
searchPhotos('cat')

//GALLERY//
import { CARD } from './src/components/CARD/card'

//FOOTER//
import { printFooterTemplate } from './src/components/FOOTER/footer'

printFooterTemplate()
