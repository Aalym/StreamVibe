import { Link as RouterLink, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import styles from './style.module.scss'

const footerData = [
	{
		title: 'Home',
		links: ['Categories', 'Devices', 'Pricing', 'FAQ'],
	},
	{
		title: 'Movies',
		links: ['Genres', 'Trending', 'New Release', 'Popular'],
	},
	{
		title: 'Shows',
		links: ['Genres', 'Trending', 'New Release', 'Popular'],
	},
	{
		title: 'Support',
		links: ['ContactUs'],
	},
	{
		title: 'Subscription',
		links: ['Plans', 'Features'],
	},
]

function scrollToSection(sectionId: string) {
	scroller.scrollTo(sectionId, {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
	})
}

export default function FooterNav() {
	const location = useLocation()

	const handleClick = (e: any, link: string) => {
		e.preventDefault()
		if (location.pathname !== '/') {
			window.location.href = `/#${link}`
		} else {
			scrollToSection(link)
		}
	}

	return (
		<div className={styles.navWrapper}>
			{footerData.map((section, index) => (
				<div className={styles.navSection} key={index}>
					<h4>{section.title}</h4>
					<ul>
						{section.links.map((link, i) => (
							<li key={i}>
								<a href={`/#${link}`} onClick={e => handleClick(e, link)}>
									{link}
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
