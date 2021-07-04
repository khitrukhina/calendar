import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

import '../App.css';
import { Year } from './Year';
import { Month, StyledLink } from './Month';
import { DayPage } from './DayPage';
import { NotesContext } from '../tools/notesProvider';
import { TodosContext } from './Todo/todosProvider';
import { TodoList } from '../components/Todo/TodoList';
import { AddTodo } from './Todo/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([]);
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  const history = useHistory();
  const [notes, setNotes] = useState({});
  useEffect(() => {
    console.log('Loaded from LocalStorage');
    setNotes({ '2021-08-01': 'Hello' });
  }, []);

  const handleYearChange = (newValue) => {
    history.push(`/year/${newValue}`);
  };
  return (
    <NotesContext.Provider value={notes}>
      <TodosContext.Provider value={{ removeTodo }}>
        <div className="App">
          <Switch>
            <Route
              path="/year/:yearNumber/month/:monthNumber/day/:dayNumber"
              render={(props) => (
                <>
                  <StyledLink to="">Back</StyledLink>
                  <DayPage
                    year={Number(props.match.params.yearNumber)}
                    month={Number(props.match.params.monthNumber)}
                    day={Number(props.match.params.dayNumber)}
                  ></DayPage>
                  <AddTodo onCreate={addTodo} />

                  {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                  ) : (
                    <p>No todos!</p>
                  )}
                </>
              )}
            />

            <Route
              path="/year/:yearNumber/month/:monthNumber"
              render={(props) => (
                <>
                  <StyledLink to="" style={{ textDecoration: 'none' }}>
                    Back
                  </StyledLink>
                  <Month
                    year={Number(props.match.params.yearNumber)}
                    month={Number(props.match.params.monthNumber)}
                  ></Month>
                </>
              )}
            />

            <Route
              path="/year/:yearNumber"
              render={(props) => (
                <Year
                  year={Number(props.match.params.yearNumber)}
                  onYearChange={handleYearChange}
                ></Year>
              )}
            />

            <Route path="/today">
              <Redirect
                to={`/year/${new Date().getFullYear()}/month/${
                  new Date().getMonth() + 1
                }/day/${new Date().getDate()}`}
              ></Redirect>
            </Route>

            <Route path="/">
              <Redirect to={`/year/${new Date().getFullYear()}`}></Redirect>
            </Route>
          </Switch>
        </div>
      </TodosContext.Provider>
    </NotesContext.Provider>
  );
}
