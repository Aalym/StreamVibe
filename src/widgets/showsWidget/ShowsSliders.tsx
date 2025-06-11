import React from 'react'
import styles from './style.module.scss'

const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror']
const topGenres = ['Action', 'Adventure', 'Comedy', 'Drama']

const trendingNow = [
	{ title: 'Morbius', duration: '1h 30min', views: '2K' },
	{ title: 'Kisi Ka Bhai...', duration: '1h 57min', views: '1.5K' },
	{ title: 'Suraj Pe Mangal...', duration: '2h 10min', views: '1.8K' },
	{ title: 'Pathaan', duration: '2h 20min', views: '3K' },
	{ title: 'Ant-Man', duration: '1h 42min', views: '5K' },
]

const newReleases = [
	{ title: 'Adipurush', date: '14 April 2023' },
	{ title: 'Movie 2', date: '22 April 2023' },
	{ title: 'Sin City', date: '13 April 2023' },
	{ title: 'Tomorrow War', date: '19 April 2023' },
	{ title: 'Misfire', date: '11 April 2023' },
]

const mustWatch = [
	{ title: 'Kantara', duration: '1h 57min', rating: 5, votes: '20K' },
	{ title: 'Pushpa 2', duration: '1h 30min', rating: 5, votes: '20K' },
	{ title: 'Blade Runner 2049', duration: '1h 42min', rating: 5, votes: '20K' },
	{ title: 'Adipurush', duration: '2h 10min', rating: 5, votes: '20K' },
]

const MovieSlider = () => {
	return (
		<div className='container'>
			<div className={styles.border}>
				<div className={styles.tab}>
					<span>Shows</span>
				</div>

				<h2 className={styles.heading}>Our Genres</h2>
				<div className={styles.sliderWrapper}>
					{genres.map(genre => (
						<div key={genre} className={styles.genreCard}>
							<div className={styles.genreImages}>
								{[1, 2, 3, 4].map(i => (
									<div key={i} className={styles.imageStub} />
								))}
							</div>
							<div className={styles.genreLabel}>
								<span>{genre}</span>
								<span className={styles.arrow}>→</span>
							</div>
						</div>
					))}
					<div className={styles.navButtons}>
						<button>{'←'}</button>
						<button>{'→'}</button>
					</div>
				</div>

				<h2 className={styles.heading}>Popular Top 10 In Genres</h2>
				<div className={styles.sliderWrapper}>
					{topGenres.map(genre => (
						<div key={genre} className={styles.genreCard}>
							<div className={styles.genreImages}>
								{[1, 2, 3, 4].map(i => (
									<div key={i} className={styles.imageStub}>
										{i === 1 && (
											<span className={styles.topTenBadge}>Top 10 In</span>
										)}
									</div>
								))}
							</div>
							<div className={styles.genreLabel}>
								<span>{genre}</span>
								<span className={styles.arrow}>→</span>
							</div>
						</div>
					))}
					<div className={styles.navButtons}>
						<button>{'←'}</button>
						<button>{'→'}</button>
					</div>
				</div>

				<h2 className={styles.heading}>Trending Now</h2>
				<div className={styles.sliderWrapper}>
					{trendingNow.map((movie, idx) => (
						<div key={idx} className={styles.movieCard}>
							<div className={styles.imageStub}></div>
							<div className={styles.movieInfo}>
								<span>🕒 {movie.duration}</span>
								<span>👁 {movie.views}</span>
							</div>
						</div>
					))}
					<div className={styles.navButtons}>
						<button>{'←'}</button>
						<button>{'→'}</button>
					</div>
				</div>

				<h2 className={styles.heading}>New Releases</h2>
				<div className={styles.sliderWrapper}>
					{newReleases.map((movie, idx) => (
						<div key={idx} className={styles.movieCard}>
							<div className={styles.imageStub}></div>
							<div className={styles.releaseDate}>Released at {movie.date}</div>
						</div>
					))}
					<div className={styles.navButtons}>
						<button>{'←'}</button>
						<button>{'→'}</button>
					</div>
				</div>

				<h2 className={styles.heading}>Must - Watch Movies</h2>
				<div className={styles.sliderWrapper}>
					{mustWatch.map((movie, idx) => (
						<div key={idx} className={styles.movieCard}>
							<div className={styles.imageStub}></div>
							<div className={styles.movieInfo}>
								<span>🕒 {movie.duration}</span>
								<span className={styles.stars}>{''.repeat(movie.rating)}</span>
								<span>{movie.votes}</span>
							</div>
						</div>
					))}
					<div className={styles.navButtons}>
						<button>{'←'}</button>
						<button>{'→'}</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieSlider
