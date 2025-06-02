import styles from './style.module.scss'
import { useState } from 'react'

export default function SupportWidget() {
	const [agreed, setAgreed] = useState(false)

	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				{/* Text + Image */}
				<div className={styles.left}>
					<h2 className={styles.title}>
						Welcome to our <br /> <span>support page!</span>
					</h2>
					<p className={styles.subtitle}>
						We're here to help you with any problems you may be having with our
						product.
					</p>
					<img
						src='src/public/Sub Container.png'
						alt='Support Preview'
						width={420}
						height={500}
						className={styles.image}
					/>
				</div>

				{/* Form */}
				<form className={styles.form}>
					<div className={styles.row}>
						<input
							type='text'
							placeholder='Enter First Name'
							className={styles.input}
						/>
						<input
							type='text'
							placeholder='Enter Last Name'
							className={styles.input}
						/>
					</div>
					<div className={styles.row}>
						<input
							type='email'
							placeholder='Enter your Email'
							className={styles.input}
						/>
						<div className={styles.phoneField}>
							<div className={styles.flag}>🇮🇳</div>
							<input
								type='tel'
								placeholder='Enter Phone Number'
								className={styles.input}
							/>
						</div>
					</div>
					<textarea
						placeholder='Enter your Message'
						className={styles.textarea}
					/>
					<label className={styles.checkbox}>
						<input
							type='checkbox'
							checked={agreed}
							onChange={() => setAgreed(!agreed)}
						/>
						<span>I agree with Terms of Use and Privacy Policy</span>
					</label>
					<button type='submit' className={styles.button}>
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}
