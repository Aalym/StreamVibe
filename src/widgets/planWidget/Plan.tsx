import styles from './style.module.scss'

const plans = ['Basic', 'Standard', 'Premium']

const features = [
	{
		label: 'Price',
		values: ['$9.99/Month', '$12.99/Month', '$14.99/Month'],
	},
	{
		label: 'Content',
		values: [
			'Access to a wide selection of movies and shows, including some new releases.',
			'Access to a wider selection of movies and shows, including most new releases and exclusive content',
			'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
		],
	},
	{
		label: 'Devices',
		values: [
			'Watch on one device simultaneously',
			'Watch on Two devices simultaneously',
			'Watch on Four devices simultaneously',
		],
	},
	{
		label: 'Free Trial',
		values: ['7 Days', '7 Days', '7 Days'],
	},
	{
		label: 'Cancel Anytime',
		values: ['Yes', 'Yes', 'Yes'],
	},
	{
		label: 'HDR',
		values: ['No', 'Yes', 'Yes'],
	},
	{
		label: 'Dolby Atmos',
		values: ['No', 'Yes', 'Yes'],
	},
	{
		label: 'Ad-Free',
		values: ['No', 'Yes', 'Yes'],
	},
	{
		label: 'Offline Viewing',
		values: ['No', 'Yes, for select titles.', 'Yes, for all titles.'],
	},
	{
		label: 'Family Sharing',
		values: [
			'No',
			'Yes, up to 5 family members.',
			'Yes, up to 6 family members.',
		],
	},
]

export default function PlanComparison() {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>
				Compare our plans and find the right one for you
			</h2>
			<p className={styles.subtitle}>
				StreamVibe offers three different plans to fit your needs: Basic,
				Standard, and Premium. Compare the features of each plan and choose the
				one that’s right for you.
			</p>

			<div className={styles.table}>
				<div className={styles.headerRow}>
					<div className={styles.featureCell}>Features</div>
					{plans.map((plan, index) => (
						<div key={index} className={styles.planHeader}>
							{plan}
							{plan === 'Standard' && (
								<span className={styles.popularTag}>Popular</span>
							)}
						</div>
					))}
				</div>

				{features.map((feature, idx) => (
					<div key={idx} className={styles.dataRow}>
						<div className={styles.featureCell}>{feature.label}</div>
						{feature.values.map((value, index) => (
							<div key={index} className={styles.valueCell}>
								{value}
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	)
}
