import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPage, WelcomePage} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<WelcomePage/>}/>
            <Route path={'movies'} element={<MoviesPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
