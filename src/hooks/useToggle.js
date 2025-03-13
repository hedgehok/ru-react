import { useReducer, useRef } from 'react';

function toggleReducer(state, action) {
    if (typeof action.value === 'string' || typeof action.value === 'boolean') {
        return action.value;
    }

    if (!action.options || action.options.length === 0) {
        return !state;
    }

    const currentIndex = action.options.indexOf(state);
    if (currentIndex === -1) {
        return action.options[0];
    }

    const nextIndex = (currentIndex + 1) % action.options.length;
    return action.options[nextIndex];
}

export function useToggle(options = []) {
    const [current, dispatch] = useReducer(toggleReducer, options[0] || false);

    const optionsRef = useRef(options);
    optionsRef.current = options;

    const toggle = (value) => {
        if (value !== undefined) {
            dispatch({ value });
        } else {
            dispatch({ options: optionsRef.current });
        }
    };

    return [current, toggle];
}