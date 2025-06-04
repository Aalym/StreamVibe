import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import styles from './style.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.module.scss'

import { FaPlay, FaPlus, FaThumbsUp, FaVolumeUp } from 'react-icons/fa'

const slides = [
	{
		title: 'Avengers : Endgame',
		description:
			"With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe...",
		image: 'src/public/791740295911.jpg',
	},
	//дополню потом
]

export default function HeroSlider() {
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
									<button className={styles.playButton}>
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
		</div>
	)
}
