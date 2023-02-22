import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesPage, WelcomePage} from "./pages";
import useLocalStorage from "use-local-storage";
import {Switch} from "@mui/material";


const App = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = ()=>{
        const newTheme = theme === 'light'? 'dark' : 'light';
        setTheme(newTheme)
    }

  return (
    <div className="App" data-theme={theme}>
        <Switch onClick={switchTheme}/>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<WelcomePage/>}/>
            <Route path={'movies'} element={<MoviesPage/>}/>
            <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export {App, };
