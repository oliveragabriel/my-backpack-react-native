import React, { createContext, useReducer } from 'react';
import { reducer, initialStateId } from './reducer';
import { actionsId } from './reducer/actions';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [stateId, dispatchId] = useReducer(reducer, initialStateId);

    return (
        <UserContext.Provider value={{stateId, dispatchId}}>
            {children}
        </UserContext.Provider>
    )
}