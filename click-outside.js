const cardButtons = document.querySelectorAll('.card button')
const modalInner = document.querySelector('.modal-inner')
const modalOuter = document.querySelector('.modal-outer')

function handleCardButtonClick(e) {
  const button = e.currentTarget
  const card = button.closest('.card')

  // Grab the image source

  const imgSrc = card.querySelector('img').src

  const desc = card.dataset.description
  const name = card.querySelector('h2').textContent

  // populate the modal with the new info
  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace('200', '600')}" alt="${name}" />
    <p>${desc}</p>
  `

  // show the modal
  modalOuter.classList.add('open')
}

function closeModal() {
  modalOuter.classList.remove('open')
}

cardButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick))

modalOuter.addEventListener('click', (e) => {
  const isOutside = !e.target.closest('.modal-inner')
  if (isOutside) {
    closeModal()
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
})
