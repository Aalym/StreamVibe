import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

const API_KEY = 'd342046d-9238-4c64-b19a-de3fcb5fb2d8'

const MovieSlider = () => {
	const [genreData, setGenreData] = useState({})
	const [top10, setTop10] = useState([])
	const [newReleases, setNewReleases] = useState([])
	const [mustWatch, setMustWatch] = useState([])

	const genreNames = ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror']

	const genreSliderRef = useRef(null)
	const top10SliderRef = useRef(null)
	const newReleasesRef = useRef(null)
	const mustWatchRef = useRef(null)

	const getRandomPage = () => Math.floor(Math.random() * 20) + 1

	const fetchMovies = async (type = 'TOP_100_POPULAR_FILMS', page = 1) => {
		const res = await fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${type}&page=${page}`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': API_KEY,
					'Content-Type': 'application/json',
				},
			}
		)
		const data = await res.json()
		return data.films || []
	}

	useEffect(() => {
		const fetchAll = async () => {
			const genres = {}
			for (const genre of genreNames) {
				const movies = await fetchMovies(
					'TOP_100_POPULAR_FILMS',
					getRandomPage()
				)
				const shuffled = movies.sort(() => 0.5 - Math.random()).slice(0, 4)
				genres[genre] = shuffled
			}
			setGenreData(genres)

			const top = await fetchMovies('TOP_100_POPULAR_FILMS', getRandomPage())
			setTop10(top.slice(0, 10))

			const newR = await fetchMovies('TOP_AWAIT_FILMS', getRandomPage())
			setNewReleases(newR.slice(0, 6))

			const must = await fetchMovies('TOP_250_BEST_FILMS', getRandomPage())
			setMustWatch(must.slice(0, 6))
		}

		fetchAll()
	}, [])

	// scroll functions
	const scroll = (ref, direction) => {
		if (ref.current) {
			const scrollAmount = 300
			ref.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className='container'>
			<div className={styles.border}>
				<div className={styles.tab}>
					<span>Shows</span>
				</div>

				<h2 className={styles.heading}>Our Genres</h2>
				<div className={styles.sliderWrapper}>
					<div className={styles.sliderContent} ref={genreSliderRef}>
						{Object.keys(genreData).map(genre => (
							<div key={genre} className={styles.genreCard}>
								<div className={styles.genreImages}>
									{genreData[genre].map(movie => (
										<Link to={`/movie/${movie.filmId}`} key={movie.filmId}>
											<img
												src={movie.posterUrlPreview}
												alt={movie.nameRu || movie.nameEn}
												className={styles.imageStub}
											/>
										</Link>
									))}
								</div>
								<div className={styles.genreLabel}>
									<span>{genre}</span>
									<span className={styles.arrow}>→</span>
								</div>
							</div>
						))}
					</div>
					<div className={styles.navButtons}>
						<button
							onClick={() => scroll(genreSliderRef, 'left')}
							className={styles.arrowLeft}
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
							onClick={() => scroll(genreSliderRef, 'right')}
							className={styles.arrowRight}
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

				<h2 className={styles.heading}>Top 10 in Genres</h2>
				<div className={styles.sliderWrapper}>
					<div className={styles.sliderContent} ref={top10SliderRef}>
						{top10.map((movie, i) => (
							<Link
								to={`/movie/${movie.filmId}`}
								key={movie.filmId}
								className={styles.movieCard}
							>
								<img
									src={movie.posterUrlPreview}
									alt={movie.nameRu}
									className={styles.imageStub}
								/>
								<span className={styles.topTenBadge}>#{i + 1}</span>
							</Link>
						))}
					</div>
					<div className={styles.navButtons}>
						<button
							onClick={() => scroll(top10SliderRef, 'left')}
							className={styles.arrowLeft}
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
							onClick={() => scroll(top10SliderRef, 'right')}
							className={styles.arrowRight}
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

				<h2 className={styles.heading}>New Releases</h2>
				<div className={styles.sliderWrapper}>
					<div className={styles.sliderContent} ref={newReleasesRef}>
						{newReleases.map(movie => (
							<Link
								to={`/movie/${movie.filmId}`}
								key={movie.filmId}
								className={styles.movieCard}
							>
								<img
									src={movie.posterUrlPreview}
									alt={movie.nameRu}
									className={styles.imageStub}
								/>
								<div className={styles.releaseDate}>Year: {movie.year}</div>
							</Link>
						))}
					</div>
					<div className={styles.navButtons}>
						<button
							onClick={() => scroll(newReleasesRef, 'left')}
							className={styles.arrowLeft}
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
							onClick={() => scroll(newReleasesRef, 'right')}
							className={styles.arrowRight}
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

				<h2 className={styles.heading}>Must - Watch Shows</h2>
				<div className={styles.sliderWrapper}>
					<div className={styles.sliderContent} ref={mustWatchRef}>
						{mustWatch.map(movie => (
							<Link
								to={`/movie/${movie.filmId}`}
								key={movie.filmId}
								className={styles.movieCard}
							>
								<img
									src={movie.posterUrlPreview}
									alt={movie.nameRu}
									className={styles.imageStub}
								/>
							</Link>
						))}
					</div>
					<div className={styles.navButtons}>
						<button
							onClick={() => scroll(mustWatchRef, 'left')}
							className={styles.arrowLeft}
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
							onClick={() => scroll(mustWatchRef, 'right')}
							className={styles.arrowRight}
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
			</div>
		</div>
	)
}

export default MovieSlider
