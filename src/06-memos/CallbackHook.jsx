import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	const incrementFather = useCallback((value) => {
		setCounter((c) => c + value);
	}, []);

	// const incrementFather = useCallback(() => {
	// 	setCounter(counter + 1);
	// }, []);

	// const incrementFather = () => {
	// 	setCounter(counter + 1);
	// };

	useEffect(() => {
		incrementFather();
	}, [incrementFather()]);

	return (
		<>
			<h1>useCallback Hook: {counter}</h1>
			<hr />
			<ShowIncrement increment={incrementFather} />
		</>
	);
};
