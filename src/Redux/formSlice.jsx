// formSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        message: '',
        success: false,
        loading: false,
    },
    reducers: {
        getMessage: (state) => {
            state.loading = true
        },
        success: (state, action) => {
            state.message = action.payload
            state.success = true
            state.loading = false
        },
    },
})

export const { success, getMessage } = formSlice.actions
export default formSlice.reducer
