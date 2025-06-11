import { useState } from 'react'
import styles from './style.module.scss'
import { LoginForm } from '../../features/auth/LogInForm'
import { SignUpForm } from '../../features/auth/SignUpForm'

type SidebarMenuProps = {
	isOpen: boolean
	onClose: () => void
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose }) => {
	const [showLogin, setShowLogin] = useState(false)
	const [showSignup, setShowSignup] = useState(false)

	return (
		<>
			{isOpen && <div className={styles.overlay} onClick={onClose} />}

			<aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
				<button className={styles.closeBtn} onClick={onClose}>
					✕
				</button>
				<nav>
					<ul>
						<li>
							<button
								onClick={() => {
									setShowLogin(true), setShowSignup(false)
								}}
								className={styles.action}
							>
								Login
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									setShowSignup(true), setShowLogin(false)
								}}
								className={styles.action}
							>
								Sign Up
							</button>
							{showLogin && <LoginForm />}
							{showSignup && <SignUpForm />}
						</li>
						{/* добавлю еще  */}
					</ul>
				</nav>
			</aside>
		</>
	)
}

export default SidebarMenu
