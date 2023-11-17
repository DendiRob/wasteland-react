import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isMenuOpen: false,
    isConnectModalOpen: false,
    userAcc: '',
    nftModal: false
}

export const connectToAcc = createAsyncThunk(
    'users/connectToAcc',
    async (_,{ rejectWithValue }) => {
        if(!window.ethereum){
            return rejectWithValue()
        }
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
        setUserAcc(state) {
            state.userAcc = localStorage.getItem("userWallet")
        },
        logOut(state) {
            state.userAcc = '';
            localStorage.removeItem("userWallet");
            state.isConnectModalOpen = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(connectToAcc.rejected, (state, action) => {
            alert('Upload the metamask')
        })
        .addCase(connectToAcc.fulfilled, (state, action) => {
            state.userAcc = action.payload[0]
            localStorage.setItem("userWallet", state.userAcc)
            state.isConnectModalOpen = false
        })
    }
})
export const {openMenu, closeMenu, openConnectModal, closeConnectModal, setUserAcc, logOut} = MenuSlice.actions;
export default MenuSlice.reducer;