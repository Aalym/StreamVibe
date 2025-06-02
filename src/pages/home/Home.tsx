import React from 'react'
import ParallaxSection from '../../widgets/parallaxSection/Parallax'
import CategorySwiper from '../../widgets/categorySwiperWidget/CategorySwiper'
import DeviceSupportWidget from '../../widgets/deviceSupportWidget/DeviceSupportWidget'
import FAQWidget from '../../widgets/FAQWidget/FAQWidget'
import Pricing from '../../widgets/pricingWidget/PricingWidget'

export default function Home() {
	return (
		<main>
			<ParallaxSection />
			<CategorySwiper />
			<DeviceSupportWidget />
			<FAQWidget />
			<Pricing />
		</main>
	)
}
