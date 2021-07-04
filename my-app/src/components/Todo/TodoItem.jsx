import React from 'react';
import { useContext } from 'react';
import propTypes from 'prop-types';
import '../year.css';
import { TodosContext } from './todosProvider';

const styles = {
    li: {
        display: 'flex',
        width: '600px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 10px',
        borderRadius: '4px',
        marginBottom: '.5rem',
        border: '2px dashed #7DA1DC',
    },

    button: {
        borderRadius: '50%',
        backgroundColor: '#FB1000',
        color: 'white',
    },

    input: {
        marginRight: '20px',
    }
}

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(TodosContext);
    let classes = [];
    if(todo.completed) {
        classes.push('done');
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input checked={todo.completed} style={styles.input} type='checkbox' onChange={() => onChange(todo.id)}/>
                <strong>{index}</strong>
                {todo.title}
            </span>
            <button style={styles.button} onClick={removeTodo.bind(null, todo.id)}>&#215;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    index: propTypes.number,
    onChange: propTypes.func.isRequired,
}

export {
    TodoItem,
}