import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genres:[],
    moviesByGenreId:null
};

const getGenre = createAsyncThunk(
    'genreSlice/getGenre',
    async (_, {rejectWithValue}) =>{
        try {
            let {data} = await genreService.getGenre();
            return data
        }catch (e){
            return rejectWithValue(e.response.data);
        }
    }
)

const getMoviesByGenreId = createAsyncThunk(
    'genreSlice/getMoviesById',
    async ({id}, {rejectWithValue})=>{
        try {
            let {data} = await genreService.genreSort(id);
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getGenre.fulfilled, (state, action)=>{
                state.genre = action.payload;
            })
            .addCase(getMoviesByGenreId.fulfilled, (state, action)=>{
                state.moviesById = action.payload.results
            })

})

const {reducer: genreReducer, actions: {}} = genreSlice

const genreActions = {getGenre, getMoviesByGenreId};

export {genreActions, genreReducer}