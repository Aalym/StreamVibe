import React from 'react'
import styles from './style.module.scss'
import { NavLink } from 'react-router-dom'
import Nav from '../../app/navigation/nav'

type HeaderProps = {
	onMenuToggle: () => void
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
	return (
		<header>
			<div className='container'>
				<div className={styles.head}>
					<NavLink to='/' className={styles.logo}>
						<img src='src/img/logo.svg' alt='logo' />
					</NavLink>
					<Nav />
					<div className={styles.btns}>
						<div className={styles.loginBtn}>
							<svg
								onClick={onMenuToggle}
								className={styles.icon}
								width='25.5'
								height='25.5'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								stroke='#ffffff'
							>
								<g strokeWidth='0' />
								<g strokeLinecap='round' strokeLinejoin='round' />
								<g>
									<path
										d='M4 6H20M4 12H20M4 18H20'
										stroke='#ffffff'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</g>
							</svg>
						</div>
						<div className={styles.searchBtn}>
							<svg
								width='25.5'
								height='25.5'
								viewBox='0 0 35 34'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M30.25 29.75L22.888 22.388M22.888 22.388C24.8108 20.4653 26 17.809 26 14.875C26 9.00697 21.243 4.25 15.375 4.25C9.50697 4.25 4.75 9.00697 4.75 14.875C4.75 20.743 9.50697 25.5 15.375 25.5C18.309 25.5 20.9653 24.3108 22.888 22.388Z'
									stroke='white'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<div className={styles.notificationsBtn}>
							<svg
								width='25.5'
								height='25.5'
								viewBox='0 0 35 34'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M21.5472 24.1991C24.2312 23.8807 26.8193 23.2497 29.2741 22.3435C27.2386 20.0841 25.9997 17.093 25.9997 13.8125V12.8197C25.9999 12.7965 26 12.7732 26 12.75C26 8.05558 22.1944 4.25 17.5 4.25C12.8056 4.25 9 8.05558 9 12.75L8.99972 13.8125C8.99972 17.093 7.7608 20.0841 5.72534 22.3435C8.18032 23.2498 10.7686 23.8808 13.4528 24.1992M21.5472 24.1991C20.22 24.3565 18.8693 24.4375 17.4997 24.4375C16.1303 24.4375 14.7798 24.3565 13.4528 24.1992M21.5472 24.1991C21.6789 24.6091 21.75 25.0462 21.75 25.5C21.75 27.8472 19.8472 29.75 17.5 29.75C15.1528 29.75 13.25 27.8472 13.25 25.5C13.25 25.0463 13.3211 24.6091 13.4528 24.1992'
									stroke='white'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header
