import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    page: 1 ,
    totalPages: null,
    loading: null,
    error: null
}

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getMovies({page});
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.fulfilled, (state, action)=>{
                const {page, results, total_pages} = action.payload
                state.loading = false;
                state.page = page;
                state.tatalPages = total_pages;
                state.moveis = results;
            })
            .addCase(getMovies.pending, (state, action)=>{
                state.loading = true
            })
    }
})

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getMovies
};

export {
    movieReducer,
    movieActions
}