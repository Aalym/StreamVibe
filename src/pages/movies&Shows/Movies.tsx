import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MoviesSwiper from '../../widgets/moviesWidget/MoviesSwipers'
import HeroSlider from '../../widgets/heroSligerWidget/HeroSliger'
import ShowsSliders from '../../widgets/showsWidget/ShowsSliders'
import MovieDetailPage from '../../pages/movieDetailPage/MovieDetailPage'

export default function Movies() {
	return (
		<main>
			<HeroSlider />
			<Routes>
				<Route path='/' element={<MoviesSwiper />} />
				<Route path='/movie/:id' element={<MovieDetailPage />} />
			</Routes>
			{/* <MoviesSwiper /> */}
			<ShowsSliders />
		</main>
	)
}
