import React from 'react'
import MoviesSwiper from '../../widgets/moviesWidget/MoviesSwipers'
import HeroSlider from '../../widgets/heroSligerWidget/HeroSliger'

export default function Movies() {
	return (
		<main>
			<HeroSlider />
			<MoviesSwiper title='Latest Releases' showReleaseDate />
			<MoviesSwiper title='Top Rated' showRating />
			<MoviesSwiper title='All Movies' />
		</main>
	)
}
