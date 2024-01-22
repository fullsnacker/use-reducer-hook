const initialState = [
	{
		id: 1,
		todo: 'Recolectar la piedra del alma',
		done: false
	}
];

const todoReducer = (state = initialState, action = {}) => {
	if (action.type === '[TODO] add todo') {
		return [...state, action.payload];
	}

	return state;
};

let todos = todoReducer();

// Esto no lo debemos hacer, porque estamos mutando del arreglo y no redibuja nada
// todos.push({
// 	id: 2,
// 	todo: 'Recolectar la piedra del poder',
// 	done: false
// });

const newTodo = {
	id: 2,
	todo: 'Recolectar la piedra del poder',
	done: false
};

const addTodoAction = {
	type: '[TODO] add todo',
	payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
