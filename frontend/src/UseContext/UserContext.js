import React, { createContext, useReducer, useState } from 'react';
import { reducer, initialStateId } from './reducer';
import { actionsId } from './reducer/actions';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [stateId, dispatchId] = useReducer(reducer, initialStateId);
    const initialContext = {isSet: false, userId: ''}
    const [context, setContext] = useState(initialContext);
    const resetContext = () => setContext(initialContext);

    return (
        <UserContext.Provider value={{stateId, dispatchId, context, setContext, resetContext}}>
            {children}
        </UserContext.Provider>
    )
}