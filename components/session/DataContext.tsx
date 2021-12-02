import { createContext } from "react";
import { TTemplate } from "../../data/types";

export type DataProps = {
    data: TTemplate,
    setData: React.Dispatch<React.SetStateAction<TTemplate>>,
}
export const DataContext =  createContext<DataProps>(null);