import React, { useEffect } from 'react'
import { Element, scroller } from 'react-scroll'
import { useLocation } from 'react-router-dom'

import ParallaxSection from '../../widgets/parallaxSection/Parallax'
import CategorySwiper from '../../widgets/categorySwiperWidget/CategorySwiper'
import DeviceSupportWidget from '../../widgets/deviceSupportWidget/DeviceSupportWidget'
import FAQWidget from '../../widgets/FAQWidget/FAQWidget'
import Pricing from '../../widgets/pricingWidget/PricingWidget'

export default function Home() {
	const location = useLocation()

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '')
			scroller.scrollTo(id, {
				duration: 800,
				smooth: 'easeInOutQuart',
			})
		}
	}, [location])

	return (
		<main>
			<ParallaxSection />

			<Element name='Categories'>
				<CategorySwiper />
			</Element>

			<Element name='Devices'>
				<DeviceSupportWidget />
			</Element>

			<Element name='FAQ'>
				<FAQWidget />
			</Element>

			<Element name='Pricing'>
				<Pricing />
			</Element>
		</main>
	)
}
