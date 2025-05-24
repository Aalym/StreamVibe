import FooterNav from '../../app/footerNav/FooterNav'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import styles from './style.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.top}>
					<FooterNav />
					<div className={styles.connect}>
						<h4>Connect With Us</h4>
						<div className={styles.icons}>
							<FaFacebookF />
							<FaXTwitter />
							<FaLinkedinIn />
						</div>
					</div>
				</div>
				<div className={styles.bottom}>
					<p>©2023 streamvib, All Rights Reserved</p>
					<div>
						<a>Terms of Use</a>
						<a>Privacy Policy</a>
						<a>Cookie Policy</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
