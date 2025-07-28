import './iconbutton.css'

export const linkIcon = (iconpath, textAlt, iconUrl) => {
  const btnLink = document.createElement('a')
  btnLink.classList.add('linkIcon')
  btnLink.href = iconUrl
  // HEADER.appendChild(btnLink)

  const imgIcon = document.createElement('img')
  imgIcon.src = iconpath
  imgIcon.alt = textAlt
  btnLink.appendChild(imgIcon)
  return btnLink
}
