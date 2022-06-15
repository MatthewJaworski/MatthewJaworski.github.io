const body = document.querySelector('body')
body.classList.add('stop-scrolling')

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger)
//pobieranie elementow
const preloader = document.querySelector('.preloader')
const logo = document.querySelector('.preloader__logo')
const header = document.querySelector('.header__container')
const homeText = document.querySelector('.intro-text')
const headerBefore = CSSRulePlugin.getRule('.intro-text__slogan--strong::before')
const toSectionButton = document.querySelector('.home__goto')

// nowy time line do pojawienia sie logo
const timeLine = gsap.timeline({ defaults: { ease: 'power3.inOut' } })

timeLine
	.set([logo.children], { autoAlpha: 0 })
	.fromTo([logo.children], { y: `-=300` }, { duration: 2, y: `+=300`, autoAlpha: 1, stagger: 0.1 })

//nowy timeline do zapentlonej animacji logo preloadera
const loopedTimeLine = gsap.timeline({ defaults: { ease: 'power3.inOut' }, delay: 1.4, repeat: -1 })
//przebieg animacji
loopedTimeLine
	.to([logo.children], { stagger: 0.3, duration: 1.3, fill: '#1A2535' })
	.to([logo.children], { delay: -0.3, duration: 1.3, fill: '#edeee3', stagger: 0.3 })

window.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		body.classList.remove('stop-scrolling')
	}, 4000)

	timeLine
		.to([logo.children], { duration: 2, y: `+=300`, autoAlpha: 0, stagger: 0.1 })
		.to([preloader], { y: '-100%', duration: 1.4, display: 'none', delay: -1.3 })
		.fromTo(
			[header.children],
			{ x: `+=50`, autoAlpha: 0 },
			{ duration: 1.3, x: `-=50`, autoAlpha: 1, stagger: 0.3, delay: -1 }
		)
		.fromTo(
			[homeText.children],
			{ y: `+=50`, autoAlpha: 0 },
			{ duration: 1.3, y: `-=50`, autoAlpha: 1, stagger: 0.3, delay: -1 }
		)
		.to([headerBefore], { width: '104%', duration: 1.3, delay: -0.4 })
		.fromTo(
			[toSectionButton],
			{ y: `-=50`, autoAlpha: 0 },
			{ duration: 1.3, y: `+=50`, autoAlpha: 1, stagger: 0.3, delay: -1 }
		)
})

const consulting = document.querySelector('.consulting__content')
const consultingChildren = [...consulting.children]
const consultingTimeline = gsap.timeline({
	defaults: { ease: 'easeInOut' },
	scrollTrigger: {
		trigger: consultingChildren[0],
		start: 'top 50%',
	},
})

consultingTimeline
	.fromTo(
		consultingChildren[0].children,
		{ x: '-=100', autoAlpha: 0 },
		{
			x: '+=100',
			autoAlpha: 1,
			stagger: 0.3,
			duration: 1.3,
		}
	)
	.fromTo(
		consultingChildren[1].children,
		{ x: '+=100', autoAlpha: 0 },
		{
			x: '-=100',
			autoAlpha: 1,
			stagger: 0.3,
			duration: 1.3,
			delay: -1.3,
		}
	)

const worriesContent = document.querySelector('.worries__content')

gsap.fromTo(
	worriesContent.children,
	{ y: '+=100', autoAlpha: 0 },
	{
		y: '-=100',
		autoAlpha: 1,
		stagger: 0.3,
		duration: 1.3,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: worriesContent,
			start: '-300px 50%',
		},
	}
)
const priceContent = document.querySelector('.price__content')
const priceContentChildren = [...priceContent.children]

priceContentChildren.forEach(el => {
	gsap.fromTo(
		el.children,
		{ y: '+=100', autoAlpha: 0 },
		{
			y: '-=100',
			autoAlpha: 1,
			stagger: 0.3,
			duration: 1.3,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: priceContent,
				start: 'top 50%',
			},
		}
	)
})
const marqueeContent = document.querySelector('.marquee__content')
gsap.fromTo(
	marqueeContent.children,
	{ y: '+=100', autoAlpha: 0 },
	{
		y: '-=100',
		autoAlpha: 1,
		stagger: 0.3,
		duration: 1.3,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: marqueeContent,
			start: 'top 50%',
		},
	}
)
const loactionContent = document.querySelector('.location__content')
const footerContent = document.querySelector('.footer__content')
const footerContentChildren = [...footerContent.children]
const footer = footerContentChildren.reduce((acc, child) => [...acc, ...child.children], [])

const footerTimeline = gsap.timeline({
	defaults: { ease: 'easeInOut' },
	scrollTrigger: {
		trigger: loactionContent,
		start: 'top 50%',
	},
})
footerTimeline
	.fromTo(
		loactionContent.children,
		{ y: '-=50', autoAlpha: 0 },
		{
			y: '+=50',
			autoAlpha: 1,
			stagger: 0.3,
			duration: 1.3,
		}
	)
	.fromTo(
		footer,
		{ y: '-=50', autoAlpha: 0 },
		{
			y: '+=50',
			autoAlpha: 1,
			stagger: 0.3,
			duration: 1.3,
			delay: -0.5,
		}
	)
