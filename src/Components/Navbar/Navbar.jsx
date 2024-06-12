import React, { useContext, useState } from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const {getTotalCartItem} = useContext(ShopContext)
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
          <a class="navbar-brand w-25" href="#">
            <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/NEW_LOGO_-_Black.svg?v=1675150363" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
              <li onClick={()=>{setmenu('shop')}}><Link className="lst" to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
              <li onClick={()=>{setmenu('mens')}}><Link className="lst" to='/mens'>Mens</Link>{menu==='mens'?<hr/>:<></>}</li>
              <li onClick={()=>{setmenu('womens')}}><Link className="lst" to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
              <li onClick={()=>{setmenu('kids')}}><Link className="lst" to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
            </ul>
            <form class="d-flex align-items-center">
              <Link to='/signup'><button class="btn btn-outline-danger p-0 me-2" type="submit">SignUp</button></Link>
              <Link to='/login'><button class="btn btn-outline-danger p-0 me-2" type="submit">Login</button></Link>

              {/* cart  */}
              <div className="position-relative">

                <Link to='/cart'><AiOutlineShoppingCart className=" fs-4 text-dark" /></Link>
                <span class="position-absolute top-0 left-0 translate-middle badge rounded-pill bg-danger">
                  {getTotalCartItem()}
                  {/* <span class="visually-hidden">unread messages</span> */}
                </span>
              </div>
              {/* <a type="button" class=" position-relative"  data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
              </a> */}

              {/* <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">...</div>
              </div> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
