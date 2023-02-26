import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService, movieService, searchService} from "../../services";


const initialState = {
    movies: [],
    page:1,
    movieDetails: null,
    genres:[],
    searchResult:[],
    videosByMovieId:null
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
);

const getGenre = createAsyncThunk(
    'movieSlice/getGenre',
    async (_, {rejectWithValue})=>{
        try {
            let {data} = await genreService.getGenre();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }

    }
);

const getMovieByGenre = createAsyncThunk(
    'movieSlice/getMovieByGenre',
    async ({id, page}, {rejectWithValue})=>{
        try {
            let {data} = await genreService.genreSort(id, page)
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const getSearchMovies = createAsyncThunk(
    'movieSlice/getSearchMovies',
    async ({query, page}, {rejectWithValue})=>{
        try {
            let {data} = await searchService.search(query, page);
            return data;
        }catch (e){
        return rejectWithValue(e.response.data)
        }
    }

);




const MovieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        setPage: (state, action)=>{
            state.page = action.payload;
        },
        setMovie: (state, action)=>{
            state.movieDetails = action.payload
        },
        search: (state)=>{
            state.searchResult = [];
            state.totalPages = null;
        }

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.movies = action.payload.results;
                state.page = action.payload.page;
            })
            .addCase(getById.fulfilled, (state, action)=>{
                state.movieDetails = action.payload;
            })
            .addCase(getGenre.fulfilled, (state, action)=>{
                state.genres = action.payload.genres;
            })
            .addCase(getMovieByGenre.fulfilled, (state, action)=>{
                state.movies = action.payload.results;
                state.page = action.payload.page;
            })
            .addCase(getSearchMovies.fulfilled, (state, action)=>{
                state.searchResult = action.payload.results;
                state.page = action.payload.page;
                state.totalPage = action.payload.total_pages;
            })


});

const {reducer: movieReducer, actions:{setPage, setMovie, search}} = MovieSlice;

const movieActions = {
    getAll,
    getById,
    setMovie,
    setPage,
    getGenre,
    getMovieByGenre,
    search,
    getSearchMovies,
}

export {
    movieReducer,
    movieActions
}