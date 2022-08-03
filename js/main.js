// mobile navbar
let navToggler = document.querySelector(".mob-links")
let navbar = document.querySelector(".mob-links ul")
navToggler.onclick = () => {
  navbar.classList.toggle('show')
}
// copyright year
let copyrightYear = document.querySelector('.copyright')
let year = new Date().getFullYear()
copyrightYear.innerHTML = year
// top scroll button
let topButton = document.querySelector('.topButton')
window.addEventListener('scroll', () => {
  if (this.scrollY>=400) {
    topButton.style.opacity = '1'
    topButton.style.visibility = 'visible'
  } else {
    topButton.style.opacity = '0'
    topButton.style.visibility = 'hidden'
  }
})
topButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}