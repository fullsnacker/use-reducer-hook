import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'fullsnacker',
		email: 'fullsnacker@gmail.com'
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { value, name } = target;

		// console.log(name);
		// console.log(value);

		setFormState({
			...formState,
			[name]: value
		});
	};

	useEffect(() => {
		// console.log('use effect');
	}, []);

	useEffect(() => {
		// console.log('form state changed');
	}, [formState]);

	useEffect(() => {
		// console.log('email changed');
	}, [email]);

	return (
		<>
			<h1>SimpleForm</h1>
			<hr />
			<input
				type="text"
				className="form-control"
				placeholder="username"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			<input
				type="email"
				className="form-control mt-2"
				placeholder="fullsnacker@gmail.com"
				name="email"
				value={email}
				onChange={onInputChange}
			/>

			{username === 'fullsnacker' && <Message />}
		</>
	);
};
