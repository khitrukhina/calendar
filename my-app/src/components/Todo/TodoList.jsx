import React from 'react';
import uuid from 'react-uuid';
import { TodoItem } from './TodoItem';
import propTypes from 'prop-types';

const styles = {
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        margin: '15px 0',
        padding: '0',
    }
}

function TodoList (props) {
    return (
        <ul style={styles.ul}>
            {
                props.todos.map((todo, index) => {
                    return <TodoItem key={uuid()} todo={todo} index={index + 1} onChange={props.onToggle}/>
                })
            }
        </ul>
    );
};

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    onToggle: propTypes.func.isRequired,
}

export {
    TodoList,
}