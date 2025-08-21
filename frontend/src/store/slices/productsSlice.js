import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'

// Загрузка товаров
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
	const response = await api.get('/products')
	return response.data
})

const productsSlice = createSlice({
	name: 'products',
	initialState: { items: [], status: 'idle', error: null },
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.items = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default productsSlice.reducer
