import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './style.module.scss'

const categories = [
	{
		name: 'Action',
		posters: [
			'src/img/poster1.png',
			'src/img/poster2.png',
			'src/img/poster3.png',
			'src/img/poster4.png',
		],
	},
	{
		name: 'Adventure',
		posters: [
			'src/img/poster5.png',
			'src/img/poster6.png',
			'src/img/poster7.png',
			'src/img/poster8.png',
		],
	},
	{
		name: 'Comedy',
		posters: [
			'src/img/poster9.png',
			'src/img/poster10.png',
			'src/img/poster11.png',
			'src/img/poster12.png',
		],
	},
	{
		name: 'Drama',
		posters: [
			'src/img/poster13.png',
			'src/img/poster14.png',
			'src/img/poster15.png',
			'src/img/poster16.png',
		],
	},
	{
		name: 'Horror',
		posters: [
			'src/img/poster17.png',
			'src/img/poster18.png',
			'src/img/poster19.png',
			'src/img/poster20.png',
		],
	},
	{
		name: 'Sci-Fi',
		posters: ['scifi1.jpg', 'scifi2.jpg', 'scifi3.jpg', 'scifi4.jpg'],
	},
	{
		name: 'Documentary',
		posters: ['doc1.jpg', 'doc2.jpg', 'doc3.jpg', 'doc4.jpg'],
	},
	{
		name: 'Romance',
		posters: ['romance1.jpg', 'romance2.jpg', 'romance3.jpg', 'romance4.jpg'],
	},
	{
		name: 'MARVEL',
		posters: ['marvel1.jpg', 'marvel2.jpg', 'marvel3.jpg', 'marvel4.jpg'],
	},
	{
		name: 'Thriller',
		posters: [
			'thriller1.jpg',
			'thriller2.jpg',
			'thriller3.jpg',
			'thriller4.jpg',
		],
	},
]

export default function CategorySwiper() {
	const prevRef = useRef<HTMLButtonElement | null>(null)
	const nextRef = useRef<HTMLButtonElement | null>(null)

	return (
		<section className={styles.wrapper} id='cat'>
			<div className='container'>
				<div className={styles.header}>
					<div>
						<h2>Explore our wide variety of categories</h2>
						<p>
							Whether you're looking for a comedy to make you laugh, a drama to
							make you think, or a documentary to learn something new.
						</p>
					</div>
					<div className={styles.nav}>
						<button
							ref={prevRef}
							className={`swiper-button-prev ${styles.navBtn}`}
						>
							<svg
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								stroke='#ffffff'
							>
								<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									stroke-linecap='round'
									stroke-linejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									{' '}
									<path
										d='M6 12H18M6 12L11 7M6 12L11 17'
										stroke='#ffffff'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>{' '}
								</g>
							</svg>
						</button>

						<button
							ref={nextRef}
							className={`swiper-button-next ${styles.navBtn}`}
						>
							<svg
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								stroke='#ffffff'
							>
								<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									stroke-linecap='round'
									stroke-linejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									{' '}
									<path
										d='M6 12H18M18 12L13 7M18 12L13 17'
										stroke='#ffffff'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>{' '}
								</g>
							</svg>
						</button>
					</div>
				</div>

				<Swiper
					modules={[Navigation, Keyboard, Pagination]}
					spaceBetween={24}
					slidesPerView={'auto'}
					className={styles.swiper}
					keyboard={{ enabled: true, onlyInViewport: true }}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
					onBeforeInit={swiper => {
						if (typeof swiper.params.navigation !== 'boolean') {
							swiper.params.navigation.prevEl = prevRef.current
							swiper.params.navigation.nextEl = nextRef.current
						}
					}}
					// pagination={{ clickable: true, type: 'bullets' }}
				>
					{categories.map((cat, index) => (
						<SwiperSlide key={index} className={styles.slide}>
							<div className={styles.card}>
								<div className={styles.images}>
									{cat.posters.map((poster, i) => (
										<img
											key={i}
											src={poster}
											alt={`${cat.name}-${i}`}
											loading='lazy'
										/>
									))}
								</div>
								<div className={styles.label}>
									<span>{cat.name}</span>
									<span className={styles.arrow}>→</span>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
