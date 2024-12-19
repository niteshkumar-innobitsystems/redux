import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value:number;
    click:number;
}

const initialState: CounterState={
    value:0,
    click:0
}

const CounterState=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increase:(state)=>{
            state.value+=1;
            state.click+=1;
        },
        decrease:(state)=>{
            state.value-=1;
            state.click+=1;
        },
        reset:(state)=>{
            state.value=0;
        },
        addByValue:(state, action:PayloadAction<number>)=>{
            state.value+=action.payload;
            state.click+=1;
        },
        subByValue:(state, action:PayloadAction<number>)=>{
            state.value-=action.payload;
            state.click+=1;
        },
        resetAll:(state)=>{
            state.value=0;
            state.click=0;
        }

    }
})
export const {increase,decrease,resetAll,reset,addByValue,subByValue}=CounterState.actions;
export default CounterState.reducer;