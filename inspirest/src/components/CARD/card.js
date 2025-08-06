import './card.css'

// SECTION
const GALLERY = document.querySelector('#container-cards')
// UL CARD
const ulCard = document.createElement('ul')
ulCard.className = 'grid-cards'
GALLERY.appendChild(ulCard)

//COMPONENTE BUTTON
import { button } from '../BUTTON/button'

//COMPONENTE BUTTON-CARD-ICON
import { btnIconCard } from '../BUTTON_CARD_ICON/button-card-icon'

export const CARD = (
  urlImg,
  altDescription,
  urlImgUser,
  urlImgAltUser,
  nameUser,
  dateUpload
) => {
  // LIs CARD
  const liCard = document.createElement('li')
  liCard.classList.add('liCard')
  ulCard.appendChild(liCard)
  // ARTICLES CARD
  const card = document.createElement('article')
  card.classList.add('card')
  liCard.appendChild(card)
  // IMGs CARD
  const img = document.createElement('img')
  img.src = urlImg
  img.alt = altDescription
  card.appendChild(img)

  //BOTON CARD VISITAR
  const buttonCard = button({ background: 'red', texto: 'Visitar' })
  buttonCard.classList.add('card-button')
  buttonCard.addEventListener('click', () => {
    window.location.href = urlImg
  })
  card.appendChild(buttonCard)

  //BOTON CARD ICON COLLECTION

  //BOTON CARD ICON LIKES

  //USER CARD
  const userCard = document.createElement('div')
  card.appendChild(userCard)
  userCard.classList.add('container-user')
  //Imagenes
  const userImg = document.createElement('div')
  userCard.appendChild(userImg)
  userImg.classList.add('container-user-img')
  if (urlImgUser) {
    //Con imagen de usuario
    const imgUserCard = document.createElement('img')
    imgUserCard.src = urlImgUser
    imgUserCard.alt = urlImgAltUser
    userImg.appendChild(imgUserCard)
  } else {
    //Sin img
    userImg.classList.add('no-userImg')
  }
  //Info
  const userInfo = document.createElement('div')
  userCard.appendChild(userInfo)
  userInfo.classList.add('container-user-info')
  //Name
  const userName = document.createElement('p')
  userInfo.appendChild(userName)
  userName.textContent = nameUser
  userName.classList.add('user-name')
  //Date
  const userUpdated = document.createElement('p')
  userInfo.appendChild(userUpdated)
  userUpdated.textContent = dateUpload
  userUpdated.classList.add('user-update')
}

CARD(
  'https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg',
  'Esto es una imagen',
  'https://img.freepik.com/foto-gratis/chica-linda-posando_23-2147639420.jpg',
  'María Pérez',
  'María Pérez',
  '28/08/2025'
)
