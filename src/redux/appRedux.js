// Constantes
const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_PAGE_NAME = "SET_PAGE_NAME";
const SET_USER = "SET_USER";

// State inicial
const stateInitial = {
	pageTitle: "prueba",
	loading: false,
	todo: [],
	user: null
};

// Selectores
export const appSelector = {
	todo: (state) => state.todo,
	pageTitle: (state) => state.pageTitle,
	user:(state) => state.user,
};

// Actions
export const appActions = {
	setPageTitle: (title) => ({
		type: SET_PAGE_NAME,
		title,
	}),

	addTodo: (payload) => ({
		type: ADD_TODO,
		payload,
	}),
	setCompletedTodo: (payload) => ({
		type: COMPLETE_TODO,
		payload,
	}),
	deleteTodo: (id) => ({
		type: DELETE_TODO,
		id,
	}),
	setUser:(value)=>({
		type: SET_USER,
		value
	}),
	loading: (payload) => ({
		type: "LOADING",
		payload,
	}),
};

// Reducer
export const appReducer = (state = stateInitial, action) => {
	switch (action.type) {
		case SET_PAGE_NAME:
			return {
				...state,
				pageTitle: action.title,
			};
			case SET_USER:
				return {
					...state,
					user: action.value,
				};
		case ADD_TODO:
			return {
				...state,
				todo: [
					...state.todo,
					{
						id: action.payload.id,
						text: action.payload.text,
						completed: false,
					},
				],
			};
		case COMPLETE_TODO:
			return {
				...state,
				todo: state.todo.map((t) => {
					if (t.id === action.payload.id) {
						return {
							...t,
							completed: action.payload.completed,
						};
					}
					return t;
				}),
			};
		case DELETE_TODO:
			return {
				...state,
				todo: state.todo.filter((t) => t.id !== action.id),
			};
		case "LOADING":
			return {
				...state,
				loading: action.payload,
			};
				
		default:
			return state;
	}
};