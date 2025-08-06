import './button-card-icon.css'

// export const buttonIconCard = (totalPhotos) => {
//   const buttonIcon = document.createElement('div')
//   buttonIcon.classList.add('buttonIcon')
//   const iconButtonIcon = document.createElement('img')
//   buttonIcon.appendChild(iconButtonIcon)

//   iconButtonIcon.src = './public/assets/icons/camera.png'
//   buttonIcon.textContent = totalPhotos

//   return buttonIconCard
// }

// export const buttonIconCard = ({ type = 'default', totalNumber, urlIcon }) => {
//   const buttonIcon = document.createElement('div')
//   buttonIcon.classList.add('buttonIcon', `buttonIcon--${type}`)
//   buttonIcon.textContent = totalNumber
//   const imgButtonIcon = document.createElement('img')
//   imgButtonIcon.src = urlIcon
//   imgButtonIcon.alt = `${type} icon`
//   buttonIcon.appendChild(imgButtonIcon)

//   return buttonIcon
// }

// //BTN COLLECTION
// const collectionBtn = buttonIconCard({
//   type: 'collection',
//   totalNumber: photo.user.total_collections,
//   urlIcon: '/assets/icons/collection.png'
// })
// //BTN LIKE
// const likeBtn = buttonIconCard({
//   type: 'likes',
//   totalNumber: photo.likes,
//   urlIcon: '/assets/icons/like.png'
// })

export const btnIconCard = ({ type, urlImg, totalNumber }) => {
  return `
    <button class="iconCard ${type}">
      <img src="${urlImg}" alt="${type} icon" class="iconCard__img" />
      <span class="iconCard__number">${totalNumber}</span>
    </button>
  `
}
