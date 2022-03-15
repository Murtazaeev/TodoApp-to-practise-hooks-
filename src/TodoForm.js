import { Paper, TextField } from '@material-ui/core';
import React from 'react';
import useInputState from './hooks/useInputState';

function TodoForm({ addTodo }) {
	const [ value, handleChange, reset ] = useInputState('');
	return (
		<Paper>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addTodo(value);
					reset();
				}}
			>
				{value}
				<TextField value={value} onChange={handleChange} />
			</form>
		</Paper>
	);
}

export default TodoForm;