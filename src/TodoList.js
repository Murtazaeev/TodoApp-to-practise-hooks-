import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import React from 'react';

function TodoList(props) {
	return (
		<Paper>
			<List>
                {props.todos.map((todo) => (
                    <>
					<ListItem>
						<ListItemText>{todo.task}</ListItemText>
                        </ListItem>
                        <Divider></Divider>
                    </>
				))}
			</List>
		</Paper>
	);
}

export default TodoList;
