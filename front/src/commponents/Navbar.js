import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";

function Navbar() {
  const [show, setshow] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="box">
      <img
        id="omi"
        src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/330894224_924884975313358_9017540204595568056_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5opqUxjJK4gAX-PSNbr&tn=sAfVL_N_WKxys0YC&_nc_ht=scontent.ftun14-1.fna&oh=03_AdS3iBRkxgEm3_T9JzPaOFjtn1rpYI1LtsV3OcHPAqh8yg&oe=6416CCDC"
      />
      <img
        id="gg"
        src="https://img.favpng.com/2/0/17/clip-art-portable-network-graphics-letter-gold-text-png-favpng-yn9aJ8x3KyhbP8qYUT9nMz1xt.jpg"
      />
      <nav>
        <ul>
          <li>
            {" "}
            <a href="#">
              <Link style={{textDecoration:"none" , color:"rgb(161, 144, 77,1)"}} to="/">Accueil</Link>
            </a>
          </li>
          <li>
            {" "}
            <a href="/">
              <Link style={{textDecoration:"none" , color:"rgb(161, 144, 77,1)"}} to="/about"> À propos </Link>
            </a>
          </li>
          <li>
            {" "}
            <a href="/Galerie">
              <Link style={{textDecoration:"none" , color:"rgb(161, 144, 77,1)"}} to="/Galerie">Galerie</Link>
            </a>
          </li>
          <li>
            <a href="/Services">
            <Link style={{textDecoration:"none" , color:"rgb(161, 144, 77,1)"}} to="/Services">Services</Link>
         </a>
          </li>
          <li>
            {" "}
            <a href="/Contact">
            <Link style={{textDecoration:"none" , color:"rgb(161, 144, 77,1)"}} to="/Contact">Contact</Link>
         </a>
          </li>
        </ul>
      </nav>
      {user ? (
        <div className="gry">
          <Link to="/profil">
            <span>
              <button id="saly" onClick={() => setshow(!show)}>
              <img src={user?user.img:<h1>...Loading</h1>}  />
              </button>
            </span>
          </Link>

          {show ? (
            <ul className="kas">
              <li>
                <Link to="/logi">Sign in</Link>
              </li>
              <li className="in">
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <button id="logout"
                  onClick={() => {
                    dispatch(logout());
                    navigate("/logi");
                  }}
                >
                  logout
                </button>
              </li>
            </ul>
          ) : null}
        </div>
      ) : (
        <Link to="/logi">
          <button id="olpo">
          <svg id="alia" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill-lock" viewBox="0 0 16 16">
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
</svg>
          </button></Link>
      )}
    </div>
  );
}

export default Navbar;
