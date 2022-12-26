import React, { useState } from 'react';
import Header from './../../components/Header';
import LoginForm from '../../components/LoginForm';
import { useRouter } from 'next/router';

const LoginPage = () => {
	const router = useRouter();

	const [errorMessage, setErrorMessage] = useState('');

	const handleLogin = async ( credentials ) => {
		try{
			setErrorMessage('');

			const res = await fetch('https://www.backend.com/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json'},
				body: JSON.stringify(credentials)
			});

			if(res.status === 200){
				localStorage.setItem("isAuthenticated", true);
				router.push('/dashboard');
			}else{
				if(res.status === 401){
					const { message } = await res.json();
					setErrorMessage(message);
				}else{
					throw Error(`Error auth. status code: ${res.status}`);
				}
			}
		}catch(e){
			console.log(e);
		}
	}

	return (
		<div className='mt-12'>
			<Header title="Login Page" />
			<LoginForm onLogin={handleLogin} errorMessage={errorMessage} />
		</div>
	)
}

export default LoginPage;