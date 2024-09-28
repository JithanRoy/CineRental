import {useReducer, useState} from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import MovieList from "./cine/MovieList.jsx";
import Footer from "./Footer.jsx";
import {Moviecontext, ThemeContext} from "./context/index.js";
import {cartReducer, initialState} from "./reducers/CartReducer.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
          <Moviecontext.Provider value={{state, dispatch}}>
              <div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>
                <Header/>
                <main>
                    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                      <Sidebar/>
                      <MovieList />
                    </div>
                    <Footer/>
                </main>
              </div>
            <ToastContainer />
          </Moviecontext.Provider>
      </ThemeContext.Provider>
    </>
)}
