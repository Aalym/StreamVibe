import React from 'react'
import MoviesSwiper from '../../widgets/moviesWidget/MoviesSwipers'
import HeroSlider from '../../widgets/heroSligerWidget/HeroSliger'
import ShowsSliders from '../../widgets/showsWidget/ShowsSliders'

export default function Movies() {
	return (
		<main>
			<HeroSlider />
			<MoviesSwiper />
			<ShowsSliders />
		</main>
	)
}
