// src/features/auth/SignUpForm.tsx
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../shared/config/firebase'

export const SignUpForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signup = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			alert('Аккаунт создан')
		} catch (error: any) {
			alert(error.message)
		}
	}

	return (
		<div>
			<h2>Sign Up</h2>
			<input
				type='email'
				placeholder='Email'
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				onChange={e => setPassword(e.target.value)}
			/>
			<button onClick={signup}>Sign Up</button>
		</div>
	)
}
