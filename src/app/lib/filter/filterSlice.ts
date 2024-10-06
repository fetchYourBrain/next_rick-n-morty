import { createSlice } from "@reduxjs/toolkit";

interface stateProps {
    sortField: 'id' | 'alphabetically',
    filterField: string,
}

const initialState: stateProps = {
    sortField: 'id',
    filterField: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSortField: (state, action) => {
            state.sortField = action.payload;
        }
    }
})

export const {setSortField} = filterSlice.actions;
export default filterSlice.reducer;