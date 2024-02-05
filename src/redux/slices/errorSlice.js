import { createSlice } from "@reduxjs/toolkit";






const errSlice = createSlice({
    name: "error",

    initialState: {
        type: "",
        message: ""
    },
    reducers: {
        setDanger: (state, action) => {
            state.type = "danger",

                state.message = action?.payload?.message
        },
        setWarn: (state, action) => {

            state.type = "warning",
                state.message = action?.payload?.message
        },
        clear: (state, action) => {
            state.type = ''
            state.message = ''
        },
        success: (state, action) => {
            state.type = "success",
                state.message = action?.payload?.message
        }
    }
})


export const { setDanger, setWarn, clear, success } = errSlice.actions

export default errSlice.reducer











