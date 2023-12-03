import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCryptocurrencies, fetchDetails, fetchGraph } from './coinService';


const coinSlice = createSlice({
    name: 'coins',
    initialState: {
        coins: [],
        status: 'idle',
        error: null,
        searchTerm: "",
        price: { min: 0, max: Number.MAX_VALUE },
        coinDetail:null,
        prices: []
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder .addCase(getCryptocurrencies.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getCryptocurrencies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.coins = action.payload;
        })
        .addCase(getCryptocurrencies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(getCoinDetails.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getCoinDetails.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.coinDetail = action.payload;
        })
        .addCase(getCoinDetails.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(getGraphdata.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getGraphdata.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.prices = action.payload;
        })
        .addCase(getGraphdata.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
}
});
export const {setSearchTerm, setPrice}= coinSlice.actions
export default coinSlice.reducer;
export const getCoinDetails = createAsyncThunk('coins/getCoinDetails', async (coinId) => {
    return await fetchDetails(coinId);
});
export const getGraphdata = createAsyncThunk('coins/getGraphdata', async (coinDetailId) => {
    try {
        const data = await fetchGraph(coinDetailId);
      
        return data.prices;
    } catch (error) {
        throw error;
    }
});

export const getCryptocurrencies = createAsyncThunk('coins/getCryptocurrencies', fetchCryptocurrencies);









