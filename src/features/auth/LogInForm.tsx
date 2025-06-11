// src/features/auth/LoginForm.tsx
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../shared/config/firebase'

export const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const login = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password)
			alert('Вы вошли в систему')
		} catch (error: any) {
			alert(error.message)
		}
	}

	return (
		<div>
			<h2>Login</h2>
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
			<button onClick={login}>Login</button>
		</div>
	)
}
