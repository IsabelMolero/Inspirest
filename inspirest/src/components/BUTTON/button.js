import './button.css'

export const button = ({ texto, background = 'white' }) => {
  const btn = document.createElement('button')
  btn.className = `button ${background}`
  btn.textContent = texto
  return btn
}
