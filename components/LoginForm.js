import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const LoginForm = ({ onLogin, title = 'Log In', errorMessage, isLoading }) => {
	const [submitted, setSubmitted] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleformSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		
		if(username === "" || password === "") return;
		onLogin({ username, password })
	}

	return (
		<div className="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
			<form className="flex flex-col" onSubmit={handleformSubmit}>
				<fieldset>
					<legend className="text-3xl text-gray-600 mb-4">{title}</legend>
					<InputField
						name="username"
						type="text"
						label="Username"
						submitted={submitted}
						requiredMessage="Username is required"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						autoComplete="username"
					/>
					<InputField
						name="password"
						type="password"
						label="Password"
						submitted={submitted}
						requiredMessage="Password is required"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						autoComplete="current-password"
					/>
					<Button type="submit" data-cy="btn-login" disabled={isLoading}>
						{isLoading ? 'Loading...' : 'Login'}
					</Button>
					{errorMessage && (
						<div className="text-red-500 mt-2">{errorMessage}</div>
					)}
				</fieldset>
			</form>
		</div>
	)
}

export default LoginForm;