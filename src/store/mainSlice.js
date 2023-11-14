import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isMenuOpen: false,
    isConnectModalOpen: false
}

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
        }
    }
})
export const {openMenu, closeMenu, openConnectModal, closeConnectModal} = MenuSlice.actions;
export default MenuSlice.reducer;