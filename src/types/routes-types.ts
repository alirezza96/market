import { ReactNode } from "react";

export interface IRouter {
    path: string;
    element: ReactNode;
    children?: IRouter[];
}
