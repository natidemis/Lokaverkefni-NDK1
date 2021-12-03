import { createContext } from "react";
import { TTemplate } from "../../data/types";

export type DataProps = {
    data: TTemplate,
    setData: React.Dispatch<React.SetStateAction<TTemplate>>,
    isFinished: boolean,
    setIsFinished: React.Dispatch<React.SetStateAction<boolean>>,
    isSessionActive: boolean,
}
export const DataContext =  createContext<DataProps>(null);