import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    totalPages: null,
    page:1,
    movieDetails: null
};


const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue})=>{
        try {
            let {data} = await movieService.getMovies(page);
            return data

        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue})=>{
        try {
            let {data} = await movieService.getMoviesById(id)
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)


const MovieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        setPage: (state, action)=>{
            state.page = action.payload;
        },
        setMovie: (state, action)=>{
            state.movieDetails = action.payload
        }

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.movies = action.payload.results;
                state.totalPages = 500;
                state.page = action.payload.page;
            })
            .addCase(getById.fulfilled, (state, action)=>{
                state.movieDetails = action.payload;
            })
});

const {reducer: movieReducer, actions:{setPage, setMovie}} = MovieSlice;

const movieActions = {
    getAll,
    getById,
    setMovie,
    setPage
}

export {
    movieReducer,
    movieActions
}