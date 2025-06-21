const fetchMovie = async id => {
	try {
		const res = await fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
			{
				headers: {
					'X-API-KEY': 'd38cc326-4e6b-428d-a049-7288e7b92a5b',
					'Content-Type': 'application/json',
				},
			}
		)

		console.log(res)

		if (!res.ok) {
			console.warn(`Movie ID ${id} not found. Status: ${res.status}`)
			return null
		}

		const json = await res.json()
		return json
	} catch (err) {
		console.error(`Error fetching movie ${id}:`, err)
		return null
	}
}

const fetchData = async () => {
	const data = await Promise.all(movieIds.map(fetchMovie))
	const validMovies = data.filter(Boolean)
	setMovies(validMovies)
}
