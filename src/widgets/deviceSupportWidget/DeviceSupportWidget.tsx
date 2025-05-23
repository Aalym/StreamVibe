import React, { useState } from 'react'
import styles from './style.module.scss'
import {
	Smartphone,
	Tablet,
	Tv,
	Laptop,
	Gamepad2,
	Headphones,
	MonitorSmartphone,
	Server,
	Watch,
} from 'lucide-react'

const devices = [
	{ icon: <Smartphone size={28} />, name: 'Smartphones' },
	{ icon: <Tablet size={28} />, name: 'Tablet' },
	{ icon: <Tv size={28} />, name: 'Smart TV' },
	{ icon: <Laptop size={28} />, name: 'Laptops' },
	{ icon: <Gamepad2 size={28} />, name: 'Gaming Consoles' },
	{ icon: <Headphones size={28} />, name: 'VR Headsets' },
	{ icon: <MonitorSmartphone size={28} />, name: 'Desktop PCs' },
	{ icon: <Server size={28} />, name: 'Media Servers' },
	{ icon: <Watch size={28} />, name: 'Smart Watches' },
]

export default function DeviceSupportWidget() {
	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.header}>
					<h2>We Provide you streaming experience across various devices.</h2>
					<p>
						With StreamVibe, you can enjoy your favorite movies and TV shows
						anytime, anywhere. Our platform is designed to be compatible with a
						wide range of devices.
					</p>
				</div>

				<div className={styles.grid}>
					{devices.map((device, i) => (
						<GlowingCard key={i} icon={device.icon} name={device.name} />
					))}
				</div>
			</div>
		</section>
	)
}

function GlowingCard({ icon, name }: { icon: React.ReactNode; name: string }) {
	const [coords, setCoords] = useState({ x: 0, y: 0 })

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { left, top } = e.currentTarget.getBoundingClientRect()
		setCoords({
			x: e.clientX - left,
			y: e.clientY - top,
		})
	}

	return (
		<div
			className={styles.card}
			onMouseMove={handleMouseMove}
			style={
				{
					'--x': `${coords.x}px`,
					'--y': `${coords.y}px`,
				} as React.CSSProperties
			}
		>
			<div className={styles.icon}>{icon}</div>
			<h3>{name}</h3>
			<p>
				StreamVibe is optimized for both Android and iOS platforms. Download our
				app from the Google Play Store or the Apple App Store.
			</p>
		</div>
	)
}
