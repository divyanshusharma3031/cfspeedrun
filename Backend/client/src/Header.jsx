import logo1 from "./logo1.png";
import React from "react";
function Header() {
  // const onclick = (e) => {
  //   const icon = document.getElementsByClassName("block");
  //   const text = document.getElementsByClassName("text");
  //   let n;
  //   n = icon.length;
  //   for (let i = 0; i < n; i++) {
  //     icon[i].classList.remove("active");
  //     text[i].classList.remove("active");
  //   }
  //   let x=e.target.parentElement;
  //   x.nextSibling.classList.add("active");
  //   e.target.parentElement.parentElement.parentElement.classList.add("active");
  //   e.preventDefault();
  // };
  return (
    <>
      <div id="navbar">
        <ul id="nav">
        <li class="navitems"><img src={logo1} id = "logoimg" alt="Logo"/></li>
                <li class="navitems">Home</li>
                <li class="navitems">About Us</li>
                <li class="navitems">Contact Us</li>
                <p id="websitename">CP Speedrun</p>
        </ul>
      </div>
      
    </>
  );
}

export default Header