import { useEffect, useReducer } from 'react';

const initState = {
	data: [],
	isLoading: false,
	error: null
}

function reducer(state, action) {
	switch(action.type) {
		case 'FETCH_INIT': return {
			...state,
			isLoading: true,
			error: null
		}

		case 'FETCH_SUCCESS': return {
			...state,
			isLoading: false,
			data: action.payload
		}

		case 'FETCH_FAILURE': return {
			...state,
			isLoading: false,
			error: action.payload
		}

		default: return state
	}
}

const withFetch = Component => ({apiUrl, ...rest}) => {
	const [state, dispatch] = useReducer(reducer, initState);

	useEffect(() => {
		const fetchData = async () => {
			try {
				dispatch({ type: 'FETCH_INIT' });
				const res = await fetch(apiUrl);
				const data = await res.json();
				if(!res.ok) throw new Error(data.message);
				dispatch({ type: 'FETCH_SUCCESS', payload: data.items });
			} catch (ex) {
				dispatch({ type: 'FETCH_FAILURE', payload: ex.message });
			}
		}
		fetchData();
	}, [apiUrl])

	if(state.error) return <h3>{state.error}</h3>

	if(state.isLoading) return <h3>Fetching Data...</h3>

	return (
		<Component
			{...rest}
			data={state.data}
		/>
	)
}

export default withFetch;
