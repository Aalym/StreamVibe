import React from 'react'
import styles from './style.module.scss'

// Vite only! Импорт всех постеров автоматически
const images = Object.values(
	import.meta.glob('/src/assets/posters/*.png', { eager: true, as: 'url' })
)

interface CarouselProps {
	direction?: 'left' | 'right'
}

export default function Carousel({ direction = 'left' }: CarouselProps) {
	return (
		<div className={`${styles.carousel} ${styles[direction]}`}>
			<div className={styles.track}>
				{[...images, ...images].map((src, i) => (
					<img key={i} src={src} alt={`poster-${i}`} className={styles.image} />
				))}
			</div>
		</div>
	)
}
