import React from 'react'
import styles from './style.module.scss'

interface CarouselProps {
	direction?: 'left' | 'right'
}

// Генерация массива путей к 36 постерам
const images: string[] = Array.from(
	{ length: 36 },
	(_, i) => `/src/assest/posters/poster${i + 1}.png`
)

console.log(images)

export default function Carousel({ direction = 'left' }: CarouselProps) {
	return (
		<div className={`${styles.carousel} ${styles[direction]}`}>
			{/* <img src='/src/assest/posters/poster1.png' alt='' /> */}
			<div className={styles.track}>
				{[...images, ...images].map((src, i) => (
					<img key={i} src={src} alt={`poster-${i}`} className={styles.image} />
				))}
			</div>
		</div>
	)
}
