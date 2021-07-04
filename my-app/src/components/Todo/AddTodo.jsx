import React, { useState } from 'react'
import propTypes from 'prop-types'

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
        value,
        onChange: event => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  }
}

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px'
    },

    button: {
        color: 'rgb(66, 62, 62)',
        border: '1px solid #dbdbdb',
        borderRadius: '20px',
        cursor: 'pointer',
    },

    input: {
        border: '1px solid #dbdbdb',
        borderRadius: '20px',
        width: '30%',
        marginRight: '20px',
    }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()

    if (input.value()) {
        onCreate(input.value());
        input.clear();
    }
  }

  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <input style={styles.input} {...input.bind} />
      <button style={styles.button} type='submit'>Add to my todos</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: propTypes.func.isRequired,
}

export {
    AddTodo,
}