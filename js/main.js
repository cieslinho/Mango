const nav = document.querySelector('.nav__menu')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const closePopup = document.querySelector('.popup__icon')
const body = document.querySelector('body')

const handleNav = () => {
	nav.classList.toggle('nav__menu--active')
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__menu--active')
		})
	})
}

function popupMail() {
	alert('Wiadomość została wysłana')
}

const popup = document.querySelector('.popup')

window.addEventListener('load', function () {
	showPopup()
})

function showPopup() {
	const timeLimit = 1
	let i = 0
	const timer = setInterval(function () {
		i++
		if (i == timeLimit) {
			clearInterval(timer)
			popup.classList.add('active-popup')
			body.style.overflowY = 'hidden'
		}
		console.log(i)
	}, 1000)
}
navBtn.addEventListener('click', handleNav)
closePopup.addEventListener('click', () => {
	popup.classList.remove('active-popup')
	body.style.overflowY = 'scroll'
})
