import React from 'react'
import ParallaxSection from '../../widgets/parallaxSection/Parallax'
import CategorySwiper from '../../widgets/categorySwiperWidget/CategorySwiper'
import DeviceSupportWidget from '../../widgets/deviceSupportWidget/DeviceSupportWidget'
import FAQWidget from '../../widgets/FAQWidget/FAQWidget'

export default function Home() {
	return (
		<main>
			<ParallaxSection />
			<CategorySwiper />
			<DeviceSupportWidget />
			<FAQWidget />
		</main>
	)
}
