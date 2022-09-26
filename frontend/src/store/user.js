import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  role: 'role',
  name: 'name',
  email: 'email',
  phone: 'phone',
  loginId: 'loginId',
  companyNumber: 'companyNumber'
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login(state, context) {
      state.role = context.payload.role;
      state.name = context.payload.name;
      state.email = context.payload.email;
      state.phone = context.payload.phone;
      state.loginId = context.payload.loginId;
      state.companyNumber = context.payload.companyNumber;
    },
    logout(state) {
      state.role = '';
      state.name = '';
      state.email = '';
      state.phone = '';
      state.loginId = ''; 
      state.companyNumber = '';
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;