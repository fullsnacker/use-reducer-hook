import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
	const [counter, Setcounter] = useState(initialValue);

	const increment = (value = 1) => {
		Setcounter(counter + value);
	};

	const decrement = (value = 1) => {
		if (counter === 0) return;
		Setcounter(counter - value);
	};

	const reset = () => {
		Setcounter(initialValue);
	};

	return {
		counter,
		increment,
		decrement,
		reset
	};
};
