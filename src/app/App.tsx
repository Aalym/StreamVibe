import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import MoviesAndShows from '../pages/movies&Shows/Movies'
import Support from '../pages/support/Support'
import Subscriptions from '../pages/subscriptions/Subscribe'
import Header from '../widgets/headerWidget/Header'

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Movies' element={<MoviesAndShows />} />
				<Route path='/Support' element={<Support />} />
				<Route path='/Subscribe' element={<Subscriptions />} />
			</Routes>
		</>
	)
}
