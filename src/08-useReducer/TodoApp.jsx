import { useEffect, useReducer } from 'react';
import { TodoAdd, TodoList } from './components';
import { todoReducer } from "./todoReducer";

const initialState = [
    /* {
        id: new Date().getTime(),
        description: 'Recolectar la gema del infinito',
        done: false
    } */
];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );
    
    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify(todos) );
    }, [ todos ])
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        
        /* Se manda en la función del dispatch la acción */
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    return (
        <>
            <h1>TodoApp 10 | <small>Pendientes: 2</small> </h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } />
                </div>

                <div className='col-5'>
                    <h4>Agregar Todo</h4>
                    <hr />

                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>   
            </div>
        </>
    )
}
