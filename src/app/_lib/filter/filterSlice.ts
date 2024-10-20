import { createSlice } from "@reduxjs/toolkit";

interface stateProps {
    searchQuery: string,
    filterField: string,
}

const initialState: stateProps = {
    searchQuery: '',
    filterField: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchField: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
})

export const {setSearchField} = filterSlice.actions;
export default filterSlice.reducer;