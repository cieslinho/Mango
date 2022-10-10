const nav = document.querySelector('.nav__menu')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

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

navBtn.addEventListener('click', handleNav)
