import { TSet } from "../data/types";

export function sortSet(set1 : TSet, set2: TSet): number {
    if(set1.weight < set2.weight)
        return -1
    if(set1.weight === set2.weight){
        if(set1.reps < set2.reps)
            return -1
        if(set1.reps > set2.reps)
            return 1
        return 0
    }
    if(set1.weight > set2.weight)
        return 1
    
    return 0
}