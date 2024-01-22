import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
	{
		id: new Date().getTime(),
		description: 'Recolectar la piedra del alma',
		done: false
	},
	{
		id: new Date().getTime() * 3,
		description: 'Recolectar la piedra del poder',
		done: false
	}
];

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState);
	return (
		<>
			<h1>TodoApp</h1>
			<hr />
			<ul>
				<li>item 1</li>
				<li>item 2</li>
				<li>item 3</li>
			</ul>
		</>
	);
};
