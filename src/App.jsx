import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import MovieList from "./cine/MovieList.jsx";
import Footer from "./Footer.jsx";
import {Moviecontext} from "./context/index.js";
import {useState} from "react";

export default function App() {
  const [cardData, setCardData] = useState([]);
  return (
    <>
      <Moviecontext.Provider value={{cardData, setCardData}}>
          <Header/>
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar/>
              <MovieList />
            </div>
            <Footer/>
        </main>
      </Moviecontext.Provider>
    </>
)}
