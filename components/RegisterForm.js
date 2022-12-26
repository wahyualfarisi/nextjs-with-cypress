import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const RegisterForm = ({ onRegister, title = 'Register', errorMessage }) => {
	const [submitted, setSubmitted] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);

		if (fullname === "" || username === "" || password === "" || email === "") return;

		onRegister({ fullname, email, username, password })
	}

	return (
		<div className="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
			<form className="flex flex-col" onSubmit={handleFormSubmit}>
				<fieldset>
					<legend className="text-3xl text-gray-600 mb-4">{title}</legend>
					<InputField
						name="fullname"
						type="text"
						label="Fullname"
						submitted={submitted}
						requiredMessage="fullname is required"
						onChange={(e) => setFullname(e.target.value)}
						value={fullname}
						autoComplete="fullname"
					/>

					<InputField
						name="email"
						type="text"
						label="Email"
						submitted={submitted}
						requiredMessage="Email is required"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						autoComplete="email"
					/>

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

					<Button type="submit">Register</Button>
					{errorMessage && (
						<div className="text-red-500 mt-2">{errorMessage}</div>
					)}
				</fieldset>
			</form>
		</div>
	)
}

export default RegisterForm;