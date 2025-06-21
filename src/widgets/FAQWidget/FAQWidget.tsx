import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

const faqItems = [
	{
		id: 1,
		q: 'What is StreamVibe?',
		a: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
	},
	{
		id: 2,
		q: 'How much does StreamVibe cost?',
		a: 'StreamVibe offers both free and premium plans. The premium plan starts at $9.99 per month with a 7-day free trial.',
	},
	{
		id: 3,
		q: 'What content is available on StreamVibe?',
		a: 'StreamVibe offers a wide range of content including movies, TV shows, documentaries, and exclusive originals across genres.',
	},
	{
		id: 4,
		q: 'How can I watch StreamVibe?',
		a: 'You can watch StreamVibe on smartphones, tablets, smart TVs, or any device with a web browser. Just log in and start streaming.',
	},
	{
		id: 5,
		q: 'How do I sign up for StreamVibe?',
		a: 'Visit our website and click the "Sign Up" button. Follow the instructions to create your account and start watching immediately.',
	},
	{
		id: 6,
		q: 'What is the StreamVibe free trial?',
		a: 'The free trial gives you full access to premium content for 7 days. Cancel anytime before the trial ends to avoid charges.',
	},
	{
		id: 7,
		q: 'How do I contact StreamVibe customer support?',
		a: 'You can contact our support team via the "Help" section on our website or by emailing support@streamvibe.com.',
	},
	{
		id: 8,
		q: 'What are the StreamVibe payment methods?',
		a: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay for subscriptions and purchases.',
	},
]

export default function FaqWidget() {
	const [openId, setOpenId] = useState<number | null>(1)

	const toggle = (id: number) => {
		setOpenId(prev => (prev === id ? null : id))
	}

	return (
		<section className={styles.faqSection}>
			<div className='container'>
				<div className={styles.header}>
					<div>
						<h2>Frequently Asked Questions</h2>
						<p>
							Got questions? We've got answers! Check out our FAQ section to
							find answers to the most common questions about StreamVibe.
						</p>
					</div>
					<Link to='/Support' className={styles.askBtn}>
						Ask a question
					</Link>
				</div>

				<div className={styles.grid}>
					{faqItems.map(({ id, q, a }) => (
						<div
							key={id}
							className={`${styles.card} ${openId === id ? styles.active : ''}`}
						>
							<div className={styles.top} onClick={() => toggle(id)}>
								<span className={styles.number}>
									{String(id).padStart(2, '0')}
								</span>
								<span className={styles.question}>{q}</span>
								<span className={styles.toggle}>
									{openId === id ? '−' : '+'}
								</span>
							</div>
							<div
								className={`${styles.answerWrapper} ${
									openId === id ? styles.visible : ''
								}`}
								style={{ maxHeight: openId === id ? '500px' : '0px' }}
							>
								<div className={styles.answer}>{a}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
