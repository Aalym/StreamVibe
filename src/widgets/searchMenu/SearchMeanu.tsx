import { useState } from 'react'
import styles from './style.module.scss'

export default function SearchMenu() {
	const [query, setQuery] = useState('')
	const [results, setResults] = useState<any[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleSearch = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!query.trim()) return

		setLoading(true)
		setError(null)

		try {
			const res = await fetch(
				`https://api.kinopoisk.dev/v1.4/movie/search?query=${encodeURIComponent(
					query
				)}`,
				{
					headers: {
						'X-API-KEY': 'd342046d-9238-4c64-b19a-de3fcb5fb2d8',
					},
				}
			)

			if (!res.ok) throw new Error(`Ошибка: ${res.status}`)

			const data = await res.json()
			setResults(data.docs || [])
		} catch (err: any) {
			setError(err.message || 'Ошибка при поиске')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className={styles.menu}>
			<form onSubmit={handleSearch}>
				<input
					type='text'
					value={query}
					onChange={e => setQuery(e.target.value)}
					placeholder='Введите название фильма...'
					className={styles.input}
				/>
				<button type='submit' className={styles.button}>
					Поиск
				</button>
			</form>

			{loading && <p>Загрузка...</p>}
			{error && <p style={{ color: 'red' }}>{error}</p>}

			<ul className={styles.results}>
				{results.map(movie => (
					<li key={movie.id || movie.kinopoiskId}>
						{movie.name || movie.alternativeName}{' '}
						{movie.year && `(${movie.year})`}
					</li>
				))}
			</ul>
		</div>
	)
}
