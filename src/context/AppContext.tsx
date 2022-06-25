import React from "react";

export type ContextData = {
    username: string;
    setUsername : (value : string) => void
}

const ContextDefaultValue: ContextData = {
    username : "",
    setUsername : () => {}
}

export const AppContext = React.createContext<ContextData>(ContextDefaultValue);