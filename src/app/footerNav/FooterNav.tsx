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
		links: ['Contact Us'],
	},
	{
		title: 'Subscription',
		links: ['Plans', 'Features'],
	},
]

export default function FooterNav() {
	return (
		<div className={styles.navWrapper}>
			{footerData.map((section, index) => (
				<div className={styles.navSection} key={index}>
					<h4>{section.title}</h4>
					<ul>
						{section.links.map((link, i) => (
							<li key={i}>{link}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
