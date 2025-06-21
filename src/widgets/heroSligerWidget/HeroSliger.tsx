import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import styles from './style.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { FaPlay, FaPlus, FaThumbsUp, FaVolumeUp } from 'react-icons/fa'

const slides = [
	{
		title: 'Avengers: Endgame',
		description:
			"With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe...",
		image: 'src/public/791740295911.jpg',
	},
	// можно добавить ещё слайды
]

export default function HeroSlider() {
	const [isWatching, setIsWatching] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(slides[0])

	const handlePlayClick = (slide: any) => {
		setCurrentSlide(slide)
		setIsWatching(true)
	}

	return (
		<div className='container'>
			<Swiper
				modules={[Navigation, Pagination]}
				navigation
				pagination={{ clickable: true }}
				loop
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div
							className={styles.heroSlide}
							style={{
								backgroundImage: `url(${slide.image})`,
							}}
						>
							<div className={styles.heroContent}>
								<h2>{slide.title}</h2>
								<p>{slide.description}</p>
								<div className={styles.heroButtons}>
									<button
										className={styles.playButton}
										onClick={() => handlePlayClick(slide)}
									>
										<FaPlay /> Play Now
									</button>
									<button>
										<FaPlus />
									</button>
									<button>
										<FaThumbsUp />
									</button>
									<button>
										<FaVolumeUp />
									</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Модальное окно просмотра */}
			{isWatching && (
				<div className={styles.modalOverlay}>
					<div
						className={styles.modalImage}
						style={{
							backgroundImage: `url(${currentSlide.image})`,
						}}
					>
						<button
							className={styles.modalPlayButton}
							onClick={() => alert('Фильм "запущен"')}
						>
							<FaPlay />
						</button>
						<button
							className={styles.closeButton}
							onClick={() => setIsWatching(false)}
						>
							×
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
