import { createContext } from "react";

export const contextSetValueStr = createContext<(value: string)=>void>(()=>{});