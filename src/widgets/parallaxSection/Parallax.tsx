import React from 'react'
import styles from './style.module.scss'
import Hero from '../homeHeroSection/homeHero/HomeHero'

export default function ParallaxSection() {
	return (
		<section className={styles.parallax}>
			<div className={styles.background} />

			<div className={styles.overlay}>
				<Hero />
			</div>
		</section>
	)
}
