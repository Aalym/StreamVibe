import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

const FreeTrialBanner: React.FC = () => {
	return (
		<div className='container'>
			<div className={styles.banner}>
				<div className={styles.content}>
					<h2 className={styles.title}>Start your free trial today!</h2>
					<p className={styles.description}>
						This is a clear and concise call to action that encourages users to
						sign up for a free trial of StreamVibe.
					</p>
				</div>
				<Link to='/subscriptions' className={styles.button}>
					Start Free Trail
				</Link>
			</div>
		</div>
	)
}

export default FreeTrialBanner
