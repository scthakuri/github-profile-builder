import React, { ReactNode } from "react";

export interface ThemeProps {
    value: string;
    label: string;
}

export interface GitubStat {
    theme : ThemeProps | null;
    border : boolean;
    lifetimecommit : boolean;
    privatecommit : boolean;
    compact : boolean;
}

export interface SocialInputProps {
    type : string;
    value : string;
    onChange : (newValue : string) => void;
    svg : () => ReactNode;
}

export interface SlideProps {
    onBackPress: () => void
}

export interface SocialGeneratorItemProps{
    generate : (value : string) => void;
}

export interface SocialGeneratorProps {
    twitter : SocialGeneratorItemProps;
}