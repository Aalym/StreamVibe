import { useState } from 'react'
import styles from './style.module.scss'

export default function PricingWidget() {
	const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

	const plans = [
		{
			title: 'Basic Plan',
			description:
				'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
			price: billing === 'monthly' ? 9.99 : 119.88,
		},
		{
			title: 'Standard Plan',
			description:
				'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
			price: billing === 'monthly' ? 12.99 : 155.88,
		},
		{
			title: 'Premium Plan',
			description:
				'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
			price: billing === 'monthly' ? 14.99 : 179.88,
		},
	]

	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<h2 className={styles.title}>Choose the plan that’s right for you</h2>
				<p className={styles.subtitle}>
					Join StreamVibe and select from our flexible subscription options
					tailored to suit your viewing preferences.
				</p>
				<div className={styles.toggle}>
					<button
						className={billing === 'monthly' ? styles.active : ''}
						onClick={() => setBilling('monthly')}
					>
						Monthly
					</button>
					<button
						className={billing === 'yearly' ? styles.active : ''}
						onClick={() => setBilling('yearly')}
					>
						Yearly
					</button>
				</div>
			</div>

			<div className={styles.plans}>
				{plans.map(plan => (
					<div key={plan.title} className={styles.card}>
						<h3 className={styles.planTitle}>{plan.title}</h3>
						<p className={styles.planDesc}>{plan.description}</p>
						<p className={styles.price}>
							${plan.price.toFixed(2)} <span>/ {billing}</span>
						</p>
						<div className={styles.buttons}>
							<button className={styles.trial}>Start Free Trial</button>
							<button className={styles.choose}>Choose Plan</button>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
