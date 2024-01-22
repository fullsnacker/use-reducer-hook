import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: ''
	});

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false
		};

		onNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="Que hay que hacer?"
				className="form-control"
				value={description}
				name="description"
				onChange={onInputChange}
			/>
			<button className="btn btn-outline-primary" type="submit">
				Agregar
			</button>
		</form>
	);
};
