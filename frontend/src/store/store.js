import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import categoriesReducer from './slices/categoriesSlice'
import saleReducer from './slices/saleSlice'
import orderReducer from './slices/orderSlice'

export const store = configureStore({
	reducer: {
		products: productsReducer,
		categories: categoriesReducer,
		sale: saleReducer,
		order: orderReducer,
	},
})
