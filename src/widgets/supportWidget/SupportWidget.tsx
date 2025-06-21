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
							<div className={styles.flag}>
								<svg
									width='28'
									height='20'
									viewBox='0 0 28 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='28' height='20' rx='2' fill='white' />
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z'
										fill='#D02F44'
									/>
									<rect width='12' height='9.33333' fill='#46467F' />
								</svg>
							</div>
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
