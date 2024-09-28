import {useContext, useState} from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import CardDetails from "./cine/CartDetails.jsx";
import {Moviecontext, ThemeContext} from "./context/index.js";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const {state} = useContext(Moviecontext);
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <>
      <header>
        {showCart && <CardDetails onClose={()=> setShowCart(false)} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="">
            <img src={Logo} width="139" height="26" alt="logo"/>
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                 href="#">
                <img src={Ring} width="24" height="24" alt="ring"/>
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(darkMode => !darkMode)}
              >
                <img src={darkMode ? Sun : Moon} width="24" height="24" alt="theme-icon"/>
              </a>
            </li>
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                 href="#">
                <img
                  src={ShoppingCart}
                  width="24"
                  height="24"
                  alt="cart"
                  onClick={() => setShowCart(true)}
                />
                {state.cartData?.length > 0 && (
                  <span
                    className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {state.cartData?.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
