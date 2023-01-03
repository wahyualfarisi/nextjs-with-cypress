import React, { useState } from 'react';
import Header from './../../components/Header';
import LoginForm from '../../components/LoginForm';
import { useRouter } from 'next/router';
import axios from '../../helpers/axios';

const LoginPage = () => {
	const router = useRouter();

	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async ( credentials ) => {
		try{
			setErrorMessage('');
			setIsLoading(true);

			const res = await axios.post(
				'login',
				JSON.stringify(credentials),
				{ headers: { 'Content-Type': 'application/json' }
			});

			setIsLoading(false);
			if(res.status === 200){
				localStorage.setItem("isAuthenticated", true);
				router.push('/dashboard');
			}
		}catch(e){
			setIsLoading(false);
			setErrorMessage(e.response?.data?.message || 'Error');
		}
	}

	return (
		<div className='mt-12'>
			<Header title="Login Page" />
			<LoginForm onLogin={handleLogin} errorMessage={errorMessage} isLoading={isLoading} />
		</div>
	)
}

export default LoginPage;