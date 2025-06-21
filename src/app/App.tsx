import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import MoviesAndShows from '../pages/movies&Shows/Movies'
import Support from '../pages/support/Support'
import Subscriptions from '../pages/subscriptions/Subscribe'
import Header from '../widgets/headerWidget/Header'
import Footer from '../widgets/footerWidget/Footer'
import Cookie from '../app/cookiePolicy/CustomCookieConsent'
import SidebarMenu from '../widgets/sidebarMenu/SidebarMenu'
import Baner from '../widgets/banerWidget/BanerWIdget'
import MovieDetails from '../pages/movieDetailPage/MovieDetailPage'
import MovieSlider from '../widgets/moviesWidget/MoviesSwipers'
import useScrollToTopOnNavigate from '../hooks/useScrollToTopOnNavigate'

const App: React.FC = () => {
	useScrollToTopOnNavigate()
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = () => setIsSidebarOpen(prev => !prev)
	const closeSidebar = () => setIsSidebarOpen(false)

	return (
		<>
			<Header onMenuToggle={toggleSidebar} />
			<SidebarMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/MoviesAndShows' element={<MoviesAndShows />} />
				<Route path='/Support' element={<Support />} />
				<Route path='/Subscriptions' element={<Subscriptions />} />
				<Route path='/' element={<MovieSlider />} />
				<Route path='/movie/:id' element={<MovieDetails />} />
			</Routes>
			<Baner />
			<Footer />
			<Cookie />
		</>
	)
}
export default App
