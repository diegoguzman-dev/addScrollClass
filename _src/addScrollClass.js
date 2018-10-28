export default function addScrollClass(opts = {}) {
	const options = {
			...{
				upClass: '-scroll-up',
				downClass: '-scroll-down',
			},
			...opts,
		},
		upClass = options.upClass,
		downClass = options.downClass

	let lastScrollVal,
		debouncing = false

	function init() {
		lastScrollVal = window.scrollY

		window.addEventListener('scroll', () => {
			if (debouncing) {
				return
			}
			onScroll()
		})
	}

	function onScroll() {
		debouncing = true
		window.requestAnimationFrame(() => {
			const newScrollVal = window.scrollY

			if (newScrollVal > lastScrollVal) {
				document.body.classList.remove(upClass)
				document.body.classList.add(downClass)
			}
			if (newScrollVal < lastScrollVal) {
				document.body.classList.remove(downClass)
				document.body.classList.add(upClass)
			}

			lastScrollVal = newScrollVal
			debouncing = false
		})
	}

	return Object.freeze({
		init,
	})
}
