import {configureStore} from '@reduxjs/toolkit'
import popularreducer from './slice/popularslice'
import allitemreducer from './slice/shopcategoryslice'
import productreducer from './slice/productslice'
import cartreducer from './slice/cartslice'
export const store = configureStore({
    reducer:{
        popular:popularreducer,
        allitem:allitemreducer,
        product:productreducer,
        cartitem:cartreducer
    }
})