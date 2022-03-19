import { useEffect, useState } from 'react';

function useLocalStorageState(key, defaultVal) {
	// to make the piece of state, based off value in localstorage
	const [ state, setState ] = useState(() => {
		let val;
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
		} catch (e) {
			val = defaultVal;
		}
		return val;
	});
	useEffect(
		// useEffect to update the localstorage when state changes
		() => {
			window.localStorage.getItem(key, JSON.stringify(state));
		},
		[ state, setState ]
	);
}

export default useLocalStorageState;
