import React from 'react';

export const UserContext = React.createContext({
    checkingToken: false,
    sessionToken: null,
    user: null,
});

export const AnotherContext = null;
