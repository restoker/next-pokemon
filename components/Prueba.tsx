import { createContext, FC, useMemo, useReducer } from 'react';




export const Prueba: FC = ({ children }) => {


    return (
        <Context.Provider
            value={useMemo(() => ({}), [state, dispatch])}
        >
            {children}
        </Context.Provider>
    );
};