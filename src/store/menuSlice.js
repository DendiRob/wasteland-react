import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isMenuOpen: false,
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
        }
    }
})
export const {openMenu, closeMenu} = MenuSlice.actions;
export default MenuSlice.reducer;