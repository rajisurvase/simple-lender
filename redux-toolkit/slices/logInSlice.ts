import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '@/reduxtoolkit/store/store'
import { loginData } from '../interfaces/interfaces'

// Define the initial state using that type
const initialState: loginData = {
  email: "",
}

export const logInSlice = createSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginData: (state,{payload}) => {
      console.log(state,'State');
      console.log(payload,"payload");
      
      // state.email
    },
    resetLoginData: (state) => {
      state.email =initialState.email;
    },
   
  },
  extraReducers:{}
})

export const { setLoginData, resetLoginData} = logInSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default logInSlice.reducer