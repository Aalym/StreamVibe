import React from 'react'
import styles from './style.module.scss'
import Carousel from '../homeHeroSection/movieCarousel/MovieCarousel'

export default function ParallaxSection() {
	return (
		<section className={styles.parallax}>
			<div className={styles.overlay}>
				<h1>The Best Streaming Experience</h1>
				<p>
					StreamVibe is the best streaming experience for watching your favorite
					movies and shows on demand, anytime, anywhere.
				</p>
				<button>Start Watching Now</button>
			</div>

			<div className={styles.carousels}>
				<Carousel direction='left' />
				<Carousel direction='right' />
				<Carousel direction='left' />
				<Carousel direction='right' />
			</div>
		</section>
	)
}
