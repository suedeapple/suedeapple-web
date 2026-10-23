import { inject } from '@vercel/analytics'
import gsap from 'gsap'

inject()
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Typed from 'typed.js'

gsap.registerPlugin(ScrollTrigger)

const body = document.querySelector('body')
const nav = document.querySelector('nav')
const hamburgerIcon = document.getElementById('hamburger-icon')
const togglers = document.getElementsByClassName('toggler')

const lenis = new Lenis({
	autoRaf: false,
	smoothWheel: true,
	lerp: 0.1,
	anchors: true,
})

lenis.on('scroll', () => {
	ScrollTrigger.update()
})

gsap.ticker.add((time) => {
	lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

for (var z = 0; z < togglers.length; z++) {
	var elem = togglers[z]
	elem.onclick = function () {
		body.classList.toggle('overflow')
		nav.classList.toggle('active')
		if (hamburgerIcon.classList.contains('fa-bars')) {
			hamburgerIcon.classList.remove('fa-bars')
			hamburgerIcon.classList.add('fa-close')
		} else {
			hamburgerIcon.classList.remove('fa-close')
			hamburgerIcon.classList.add('fa-bars')
		}
		return true
	}
}

if (document.querySelector('.typing')) {
	new Typed('.typing', {
		strings: [
			'Knows About SEO',
			'Is a Web Designer',
			'ASP.NET / C# Guy',
			'CMS Trained a Baroness',
			'Works on a Windows PC',
			'Ready To Be Hired',
			'BSC(Hons) Information Systems',
			'Loves CSS More Than C#',
			'Is on LinkedIn and Twitter',
			'Has Met Neils Hartvig, Former CEO ',
			'Builds Awesome Websites',
			'Has Been to Graceland, Memphis',
			'Curates Web Content',
			'Passed His Driving Test, First Time',
			'Remembers Netscape and Mosaic',
			'Is Based in Burnley, Lancashire',
			'Favourite Colour is Blue',
			'Loves the Web -  Hates Spiders',
			'Loves Yummy Carrot Cake',
			'Likes Happy Clients',
			'Has Worked for Chocolate',
			'Is Loving Umbraco v14',
			'Sings and Plays Guitar',
			'Builds UX/UI Prototypes',
			'Translates Tech Talk into English',
			'Loves Umbraco CMS',
			'Loves Adobe XD',
			'Enjoys Chippy Tea Friday',
			'Takes Zoom Yoga Lessons',
			'HTML/CSS/JS Front-End Expert',
			'Bakes Awesome Muffins',
			'Loves LEGO Building',
			'Is a Web Developer',
		],
		typeSpeed: 140,
		backSpeed: 20,
		backDelay: 5000,
		startDelay: 5000,
		shuffle: true,
		loop: true,
	})
}

if (document.querySelector('#about')) {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '#about',
				start: 'top +=200px',
			},
		})
		.from('.about-card', { x: -200, opacity: 0, duration: 1.5 })
}

function revealOnScroll(selector) {
	gsap.utils.toArray(selector).forEach((item) => {
		// Skip items already on screen at load — only animate ones the
		// user actually has to scroll to reveal.
		if (item.getBoundingClientRect().top < window.innerHeight * 0.85) {
			return
		}

		gsap.from(item, {
			opacity: 0,
			y: 50,
			duration: 1,
			scrollTrigger: {
				trigger: item,
				start: 'top 85%',
			},
		})
	})
}

;[
	'.timeline-item',
	'.service-card',
	'.work-card',
	'.package-card',
].forEach((selector) => {
	if (document.querySelector(selector)) {
		revealOnScroll(selector)
	}
})

if (document.querySelector('#contact')) {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '#contact',
				start: 'top +=200px',
			},
		})
		.from('.contact-form', { x: -200, opacity: 0, duration: 1.5 })
}
