import './header.css'

//COMPONENTE ICON BUTTON
import { linkIcon } from '../ICONBUTTON/iconbutton'

//COMPONENTE BUTTON
import { button } from '../BUTTON/button'

const HEADER = document.querySelector('#header')

//-------------------LOGO
const logoBtn = linkIcon(
  '/assets/icons/logopinteres.png',
  'logo Pinterest',
  '#'
)
logoBtn.classList.add('logo')
HEADER.appendChild(logoBtn)

//-------------------NAV - BOTONES
const nav = document.createElement('nav')
nav.classList.add('mainNav')
HEADER.appendChild(nav)

const ul = document.createElement('ul')
const li1 = document.createElement('li')
const inicioBtn = button({ background: 'black', texto: 'Inicio' })
li1.appendChild(inicioBtn)
const li2 = document.createElement('li')
const explorarBtn = button({ texto: 'Explorar' })
li2.appendChild(explorarBtn)
const li3 = document.createElement('li')
const crearBtn = button({ texto: 'Crear' })
li3.appendChild(crearBtn)

ul.append(li1, li2, li3)
nav.appendChild(ul)

//-------------------SEARCH
import { createSearch } from '../SEARCH/search'

const searchElement = createSearch('🔍 \u00A0 Buscar')
HEADER.appendChild(searchElement)

//-------------------NAV - ICONS
const divIcons = document.createElement('div')
divIcons.classList.add('divIcons')
HEADER.appendChild(divIcons)

const notifyBtn = linkIcon('/assets/icons/bell.png', 'notificación', '#')
const commentBtn = linkIcon('/assets/icons/Comment Dots.png', 'comentario', '#')
const userBtn = linkIcon('/assets/icons/userD.png', 'comentario', '#')

divIcons.append(notifyBtn, commentBtn, userBtn)
