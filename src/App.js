import './App.css';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenrePage, MovieDetailsPage, MoviesPage, SearchPage} from "./pages";
import useLocalStorage from "use-local-storage";
import {Switch} from "@mui/material";
import {AnimatePresence} from "framer-motion";


const App = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = ()=>{
        const newTheme = theme === 'light'? 'dark' : 'light';
        setTheme(newTheme)

    }

    const location = useLocation()

  return (
    <div className="App" data-theme={theme}>
        <div className={'toggle'}>
        <Switch onClick={switchTheme}/>
        </div>
        <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'movies'}/>}/>
            <Route path={'movies'} element={<MoviesPage/>}/>
            <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
            <Route path={'genres/:genre'} element={<GenrePage/>}/>
            <Route path={'genres/:genre/:id'} element={<MovieDetailsPage/>}/>
            <Route path={'search'} element={<SearchPage/>}/>
            <Route path={'search/:id'} element={<MovieDetailsPage/>}/>
        </Route>
      </Routes>
        </AnimatePresence>
    </div>
  );
}

export {App, };
