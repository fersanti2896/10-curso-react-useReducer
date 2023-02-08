# Sección 10 - Profundizando Hooks: useReducer
___

Es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamente importante para poder entrar a Redux o bien usar el contextAPI fácilmente. Los temas que se abarcan son:

- Concepto y uso de `useReducer`.
- Reducers.
- Teoría de un `reducer`.
- Creación de aplicación de TODOs.
- Creación de CRUD local.

Características de un `useReducer`, la cual es una función:

- No debe tener efectos secundarios. 
- No debe de realizar tareas asíncronas.
- Debe de retornar siempre un estado nuevo. 
- No debe de llamar el `localStorage` o el `sessionStorage` que se consideran efectos secundarios.
- No debe de requerir más que una acción que pueda tener un argumento. 
