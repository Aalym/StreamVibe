import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.menu}>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/moviesAndShows'
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						Movies & Shows
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/support'
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						Support
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/subscriptions'
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						Subscriptions
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
