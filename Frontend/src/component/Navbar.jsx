import React, { useState, useContext } from "react";
import { CgSearch } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import "../css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cart } = useContext(ShopContext);

  const cartCount = cart.reduce(
    (total, item) => total + (item.qty || 1),
    0
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  const totop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/collections?search=${search}`);
      totop();
      setSearch("");
      setMenuOpen(false);
    }
  };

  return (
    <div className="navbar">
      {/* LEFT */}
      <div className="left">
        <div
          className="logo"
          onClick={() => {
            totop();
            navigate("/");
          }}
        >
          Velora
        </div>
      </div>

      <div className={menuOpen ? "middle active" : "middle"}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => { totop(); setMenuOpen(false); }}>Home</Link></li>
          <li><Link to="/collections" onClick={() => { totop(); setMenuOpen(false); }}>Collections</Link></li>
          <li><Link to="/about" onClick={() => { totop(); setMenuOpen(false); }}>About</Link></li>
          <li><Link to="/contact" onClick={() => { totop(); setMenuOpen(false); }}>Contact</Link></li>
          <li><Link to="/services" onClick={() => { totop(); setMenuOpen(false); }}>Services</Link></li>
        </ul>
      </div>

      <div className="right">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <CgSearch className="searchicon" onClick={handleSearch} />
        </div>

        {!token ? (
          <div className="auth">
            <Link to="/login">
              <button className="loginbtn">Login</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </div>
        ) : (
          <>

            <div
              className="cart"
              onClick={() => {
                navigate("/cart");
                totop();
              }}
            >
              <CiShoppingCart />
              <span>{cartCount}</span>
            </div>

            <div className="profile">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                onClick={() => setOpen(!open)}
              />

              {open && (
                <div className="dropdown">
                  <p className="name">{user?.name}</p>
                  <Link className="linkk" to={'/settings'} onClick={()=> {setOpen(false) 
                    window.scrollTo({top:0, behavior:'smooth'})
                  }}><p>Settings</p></Link>
                  <p
                    onClick={() => {
                      dispatch(logout());
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      navigate('/login')
                    }}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;