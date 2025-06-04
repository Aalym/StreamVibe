import React, { useRef } from 'react'
import styles from './style.module.scss'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const movies = [
	{
		title: 'Morbius',
		poster: 'https://via.placeholder.com/150x220',
		releaseDate: '2022-04-01',
		duration: '1h 30min',
		rating: 2.0,
		views: '2K',
	},
	{
		title: 'Bhaijaan',
		poster: 'https://via.placeholder.com/150x220',
		releaseDate: '2023-05-10',
		duration: '1h 57min',
		rating: 4.5,
		views: '1.5K',
	},
	{
		title: 'Suraj Pe Mangal Bhari',
		poster: 'https://via.placeholder.com/150x220',
		releaseDate: '2021-11-15',
		duration: '2h 10min',
		rating: 3.8,
		views: '1.8K',
	},
	{
		title: 'Pathaan',
		poster: 'https://via.placeholder.com/150x220',
		releaseDate: '2023-01-25',
		duration: '2h 20min',
		rating: 4.9,
		views: '3K',
	},
	{
		title: 'Ant-Man',
		poster: 'https://via.placeholder.com/150x220',
		releaseDate: '2023-07-14',
		duration: '1h 42min',
		rating: 4.0,
		views: '5K',
	},
]

interface SliderProps {
	title: string
	showReleaseDate?: boolean
	showRating?: boolean
	showTag?: boolean
}

const Slider: React.FC<SliderProps> = ({
	title,
	showReleaseDate = false,
	showRating = false,
	showTag = false,
}) => {
	const sliderRef = useRef<HTMLDivElement>(null)

	const scroll = (direction: 'left' | 'right') => {
		const { current } = sliderRef
		if (!current) return
		current.scrollLeft += direction === 'left' ? -300 : 300
	}

	return (
		<div className={styles.sliderWrapper}>
			<div className='container'>
				{showTag && (
					<div className={styles.tagContainer}>
						<div className={styles.borderLine}></div>
						<span className={styles.moviesTag}>Movies</span>
					</div>
				)}
				<div className={styles.sliderHeader}>
					<span className={styles.title}>{title}</span>
					<div className={styles.sliderControls}>
						<button
							onClick={() => scroll('left')}
							className={styles.arrowButton}
						>
							<FaChevronLeft />
						</button>
						<button
							onClick={() => scroll('right')}
							className={styles.arrowButton}
						>
							<FaChevronRight />
						</button>
					</div>
				</div>
				<div className={styles.slider} ref={sliderRef}>
					{movies.map((movie, index) => (
						<div className={styles.card} key={index}>
							<img
								src={movie.poster}
								alt={movie.title}
								className={styles.poster}
							/>
							<div className={styles.cardTitle}>{movie.title}</div>
							<div className={styles.cardMeta}>
								{showReleaseDate && (
									<div className={styles.metaText}>
										Release Date: {movie.releaseDate}
									</div>
								)}
								{showRating && (
									<div className={styles.rating}>
										<FaStar className={styles.starIcon} /> {movie.rating}
									</div>
								)}
								{!showReleaseDate && !showRating && (
									<>
										<div className={styles.metaText}>
											Duration: {movie.duration}
										</div>
										<div className={styles.metaText}>Views: {movie.views}</div>
									</>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Slider
