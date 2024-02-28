import { createSlice} from "@reduxjs/toolkit";

export const Operations = createSlice({
    initialState: [],
    name: "operations",
    reducers: {
        AddtoCart: (state, action) => {
            const FindProduct = state.find((el) => {
                return Number(el.id) === Number(action.payload.id);
            })
            if (FindProduct) {
                FindProduct.quantity += 1;
            }
            else {
                const Productadd = { ...action.payload, quantity: 1 }
                state.push(Productadd);
            }
        },
        RemoveProduct: (state, action) => {
            return state.filter((el) => el.id !== action.payload.id)
        }
    }
})
export const { AddtoCart, RemoveProduct } = Operations.actions;
export default Operations.reducer;