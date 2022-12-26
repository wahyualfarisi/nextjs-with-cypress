import React, { useState } from 'react';
import Header from './../../components/Header';
import RegisterForm from "../../components/RegisterForm";
import { useRouter } from 'next/router';

const RegisterPage = () => {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState('');

	const handleRegister = async(credentials) => {
		console.log(credentials);
		
		try{
			setErrorMessage('');

			const res = await fetch('https://www.backend.com/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json'},
				body: JSON.stringify(credentials)
			});

			if(res.status === 200){
				localStorage.setItem("isAuthenticated", true);
				router.push('/dashboard');
			}else{
				if(res.status === 400){
					const { message } = await res.json();
					setErrorMessage(message || 'Terjadi kesalahan!');
				}else{
					throw Error(`Error register. status code: ${res.status}`);
				}
			}
		}catch(e){
			console.log(e);
		}
	}

	return (
		<div className='mt-12'>
			<Header title="Register Page" />
			<RegisterForm onRegister={handleRegister} errorMessage={errorMessage} />
		</div>
	)
}

export default RegisterPage;