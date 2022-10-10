document.addEventListener('DOMContentLoaded', function () {
	var main = new Splide('#main-carousel', {
		updateOnMove: true,
		rewind: true,
		pagination: false,
		arrows: true,
		isNavigation: true,
		heightRatio: 0.62,
		cover: true,
		gap: 15,
		start: 0,
	})

	var thumbnails = new Splide('#thumbnail-carousel', {
		updateOnMove: true,
		fixedWidth: 100,
		fixedHeight: 60,
		rewind: true,
		pagination: false,
		arrows: false,
		isNavigation: true,
		gap: 5,
		start: 0,
	})

	var dj = new Splide('#residents-carousel', {
		tyoe: 'loop',
		rewind: true,
		autoplay: true,
		pagination: false,
		arrows: false,
		autoWidth: true,
		gap: 15,
		focus: 'center',
		start: 5,
	})

	main.sync(thumbnails)
	main.mount()
	thumbnails.mount()
	dj.mount()
})
