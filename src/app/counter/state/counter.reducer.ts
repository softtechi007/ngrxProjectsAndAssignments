import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";
import { Action } from '@ngrx/store';
import { CounterState } from './counter.state'; // Ensure correct import

const _counterReducer = createReducer(
    initialState,
    on(increment,(state)=>{
        return{
            ...state,
            counter : state.counter + 1,
        };
    }),
    on(decrement,(state)=>{
        return{
            ...state,
            counter : state.counter - 1,
        };
    }),
    on(reset,(state)=>{
            return{
                ...state,
                counter: 0
            };
    })

)

export function counterReducer(state: CounterState = initialState, action: Action) {
    return _counterReducer(state, action);
  }