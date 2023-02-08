import { useReducer } from 'react';
import { TodoAdd, TodoList } from './components';
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la gema del infinito',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la gema del poder',
        done: false
    }
];

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    const handleNewTodo = ( todo ) => {
        console.log({ todo });
    }

    return (
        <>
            <h1>TodoApp 10 | <small>Pendientes: 2</small> </h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={ todos }/>
                </div>

                <div className='col-5'>
                    <h4>Agregar Todo</h4>
                    <hr />

                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>   
            </div>
        </>
    )
}
