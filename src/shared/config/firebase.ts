// src/shared/config/firebase.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyB75Bu-7zGG-M0ZQOYqTLsp-I30gY4Fjgw',
	authDomain: 'streamvibe-35328.firebaseapp.com',
	projectId: 'streamvibe-35328',
	storageBucket: 'streamvibe-35328.firebasestorage.app',
	messagingSenderId: '678543435278',
	appId: '1:678543435278:web:cf89c9929a767d0daf7e5f',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
