import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isMenuOpen: false,
    isConnectModalOpen: false,
    userAcc: '',
    nftModal: false
}

export const connectToAcc = createAsyncThunk(
    'users/connectToAcc',
    async () => {
      const response = await window.ethereum.request({method: "eth_requestAccounts"})
      return response
    }
);

const MenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        openMenu(state){
            state.isMenuOpen = true;
        },
        closeMenu(state){
            state.isMenuOpen = false;
        },
        openConnectModal(state) {
            state.isConnectModalOpen = true;
        },
        closeConnectModal(state) {
            state.isConnectModalOpen = false;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(connectToAcc.fulfilled, (state, action) => {
            state.userAcc = action.payload[0]
            console.log(state.userAcc)
        })
    }
})
export const {openMenu, closeMenu, openConnectModal, closeConnectModal} = MenuSlice.actions;
export default MenuSlice.reducer;