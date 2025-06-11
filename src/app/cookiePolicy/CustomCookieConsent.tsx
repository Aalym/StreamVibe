import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import PrivacyPolicy from 'pages/privacyPolicyPage/PrivacyPolicy'

const COOKIE_NAME = 'siteCookieConsent'

const CustomCookieConsent = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const consent = localStorage.getItem(COOKIE_NAME)
		if (!consent) {
			setIsVisible(true)
		}
	}, [])

	const handleConsent = (accepted: boolean) => {
		localStorage.setItem(COOKIE_NAME, accepted ? 'true' : 'false')
		setIsVisible(false)
		console.log(accepted ? '✅ Cookies accepted' : '❌ Cookies declined')
	}

	if (!isVisible) return null

	return (
		<div className={styles.banner}>
			<div className={styles.message}>
				Мы используем файлы cookie для персонализации контента и анализа
				трафика. Подробнее в&nbsp;
				<Link to='src/pages/privacyPolicyPage/PrivacyPolicy.tsx'>
					Политика конфиденциальности
				</Link>
				.
			</div>
			<div className={styles.buttons}>
				<button className={styles.accept} onClick={() => handleConsent(true)}>
					Принять
				</button>
				<button className={styles.decline} onClick={() => handleConsent(false)}>
					Отклонить
				</button>
			</div>
		</div>
	)
}

export default CustomCookieConsent
