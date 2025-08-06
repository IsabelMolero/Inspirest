import './footer.css'

const templateFooter = () => {
  return `
    <h4>Copyright 2025 - Inspirest - Rock the Code</h4>
    `
}

export const printFooterTemplate = () => {
  document.querySelector('footer').innerHTML = templateFooter()
}
