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

const App: React.FC = () => {
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
				<Route path='/subscriptions' element={<Subscriptions />} />
			</Routes>
			<Footer />
			<Cookie />
		</>
	)
}
export default App
