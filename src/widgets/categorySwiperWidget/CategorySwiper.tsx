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
		posters: ['action1.jpg', 'action2.jpg', 'action3.jpg', 'action4.jpg'],
	},
	{
		name: 'Adventure',
		posters: [
			'adventure1.jpg',
			'adventure2.jpg',
			'adventure3.jpg',
			'adventure4.jpg',
		],
	},
	{
		name: 'Comedy',
		posters: ['comedy1.jpg', 'comedy2.jpg', 'comedy3.jpg', 'comedy4.jpg'],
	},
	{
		name: 'Drama',
		posters: ['drama1.jpg', 'drama2.jpg', 'drama3.jpg', 'drama4.jpg'],
	},
	{
		name: 'Horror',
		posters: ['horror1.jpg', 'horror2.jpg', 'horror3.jpg', 'horror4.jpg'],
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
		<section className={styles.wrapper}>
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
							←
						</button>
						<div className={`swiper-pagination ${styles.bullets}`}></div>
						<button
							ref={nextRef}
							className={`swiper-button-next ${styles.navBtn}`}
						>
							→
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
					pagination={{ clickable: true, type: 'bullets' }}
				>
					{categories.map((cat, index) => (
						<SwiperSlide key={index} className={styles.slide}>
							<div className={styles.card}>
								<div className={styles.images}>
									{cat.posters.map((poster, i) => (
										<img
											key={i}
											src={`/posters/${poster}`}
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
