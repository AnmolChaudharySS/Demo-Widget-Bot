console.log('🚀 Script loaded...')
const imgContainer = document.querySelector('.image-container')
const img = document.querySelector('.image-container img')
window.addEventListener('message', e => {
  if (e.data.type === 'image') {
    imgContainer.style.display = 'block'
    img.src = e.data.value
  }
})
const close = document.querySelector('#close-image')
close.addEventListener('click', () => {
  imgContainer.style.display = 'none'
})
//console.log(img)
