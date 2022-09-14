import { createContext } from "react";
import { AnyObject } from "../typescript/models/common";

const contextData: AnyObject = {};

const GlobalContext = createContext(contextData);
export default GlobalContext;
