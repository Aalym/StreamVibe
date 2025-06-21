import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './style.module.scss'
import starIcon from '../../img/star-duotone-svgrepo-com.svg'

const API_KEY = 'd342046d-9238-4c64-b19a-de3fcb5fb2d8'

interface Person {
	nameRu?: string
	nameEn?: string
	posterUrl: string
	professionKey: string
}

export interface Movie {
	kinopoiskId: number
	nameRu?: string
	nameEn?: string
	year: number
	genres: { genre: string }[]
	countries: { country: string }[]
	description?: string
	posterUrl: string
	ratingKinopoisk?: number
}

const MovieDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const [movie, setMovie] = useState<Movie | null>(null)
	const [actors, setActors] = useState<Person[]>([])

	useEffect(() => {
		if (!id) return

		const fetchMovie = async () => {
			try {
				const res = await fetch(
					`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
					{
						method: 'GET',
						headers: {
							'X-API-KEY': API_KEY,
							'Content-Type': 'application/json',
						},
					}
				)
				const data = await res.json()
				setMovie(data)
			} catch (err) {
				console.error('Failed to fetch movie:', err)
			}
		}

		const fetchStaff = async () => {
			try {
				const res = await fetch(
					`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`,
					{
						method: 'GET',
						headers: {
							'X-API-KEY': API_KEY,
							'Content-Type': 'application/json',
						},
					}
				)
				const data: Person[] = await res.json()
				const filteredActors = data.filter(p => p.professionKey === 'ACTOR')
				setActors(filteredActors.slice(0, 10))
			} catch (err) {
				console.error('Failed to fetch staff:', err)
			}
		}

		fetchMovie()
		fetchStaff()
	}, [id])

	if (!movie) return <div className={styles.loading}>Загрузка...</div>

	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url(${movie.posterUrl})` }}
		>
			<div className={styles.overlay}>
				<div className={styles.content}>
					<div className={styles.posterBox}>
						<img
							src={movie.posterUrl}
							alt={movie.nameRu || movie.nameEn}
							className={styles.poster}
						/>
					</div>

					<div className={styles.info}>
						<h1 className={styles.title}>
							{movie.nameRu || movie.nameEn} <span>({movie.year})</span>
						</h1>

						<div className={styles.genres}>
							{movie.genres.map(g => (
								<span key={g.genre}>{g.genre}</span>
							))}
						</div>

						<div className={styles.rating}>
							<img src={starIcon} alt='star' className={styles.starIcon} />
							<span>{movie.ratingKinopoisk ?? 'N/A'}</span>
						</div>

						<p className={styles.description}>{movie.description}</p>

						<button className={styles.watchBtn}>▶ Смотреть</button>

						{actors.length > 0 && (
							<div className={styles.actorsSection}>
								<h2 className={styles.actorsTitle}>Актёры</h2>
								<div className={styles.actorsList}>
									{actors.map((actor, index) => (
										<div key={index} className={styles.actorCard}>
											<img
												src={actor.posterUrl}
												alt={actor.nameRu || actor.nameEn}
												className={styles.actorImage}
											/>
											<p className={styles.actorName}>
												{actor.nameRu || actor.nameEn}
											</p>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
