import React from "react";

export type ContextData = {
    username: string;
    setUsername : (value : string) => void
    aboutme: string;
    setAboutme : (value : string) => void
    activeSkill: string[];
    setActiveSkill : (value : string[]) => void
    generate: boolean;
    setGenerate : (value : boolean) => void
}

const ContextDefaultValue: ContextData = {
    username : "",
    setUsername : () => {},
    aboutme : ``,
    setAboutme : () => {},
    activeSkill : [],
    setActiveSkill : () => {},
    generate: false,
    setGenerate : () => {}
}

export const AppContext = React.createContext<ContextData>(ContextDefaultValue);