import { createContext } from "react";

export const ContextSetValueStr = createContext<(value: string)=>void>(()=>{});

export const ContextIsModel = createContext<boolean>(false);